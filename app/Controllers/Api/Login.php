<?php

namespace App\Controllers\Api;

use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\RESTful\ResourceController;
use App\Models\UserModel;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class Login extends ResourceController
{
    protected $format = 'json';

    /**
     * Return an array of resource objects, themselves in array format.
     *
     * @return ResponseInterface
     */
    public function index()
    {
        //
    }

    /**
     * Return the properties of a resource object.
     *
     * @param int|string|null $id
     *
     * @return ResponseInterface
     */
    public function show($id = null)
    {
        //
    }

    /**
     * Return a new resource object, with default properties.
     *
     * @return ResponseInterface
     */
    public function new()
    {
        //
    }

    /**
     * Create a new resource object, from "posted" parameters.
     *
     * @return ResponseInterface
     */
    public function create()
    {
        $validation = \Config\Services::validation();

        $rules = [
            'username' => [
                'rules' => 'required|min_length[3]|max_length[50]',
                'errors' => [
                    'required'   => 'Username is required',
                    'min_length' => 'Username must be at least 3 characters',
                    'max_length' => 'Username cannot exceed 50 characters',
                ],
            ],
            'password' => [
                'rules' => 'required|min_length[5]|max_length[255]',
                'errors' => [
                    'required'   => 'Password is required',
                    'min_length' => 'Password must be at least 5 characters',
                    'max_length' => 'Password cannot exceed 255 characters',
                ],
            ],
        ];

        if (! $this->validate($rules)) {
            // Return 400 Bad Request for validation errors
            return $this->respond([
                'status'  => 'error',
                'message' => 'Validation failed',
                'errors'  => $validation->getErrors(),
            ], 400);
        }

        $username = $this->request->getVar('username');
        $password = $this->request->getVar('password');

        $userModel = new UserModel();
        $user = $userModel->where('username', $username)->first();

        if (! $user) {
            // Return 404 Not Found if user does not exist
            return $this->respond([
                'status'  => 'error',
                'message' => 'Invalid username or password',
            ], 404);
        }    

        if (! password_verify($password, $user['password'])) {
            // Return 401 Unauthorized if password is invalid
            return $this->respond([
                'status'  => 'error',
                'message' => 'Invalid username or password',
            ], 404);
        }

        $jwtConfig = config('Jwt');

        $issuedAt = time();
        $expire = $issuedAt + $jwtConfig->expires;

        $payload = [
            'iat' => $issuedAt,
            'exp' => $expire,
            'uid' => $user['id'],
            'username' => $user['username'],
            'email' => $user['email'] ?? null,
            'section' => $user['section_id'] ?? null,
        ];

        $jwt = JWT::encode($payload, $jwtConfig->secret, $jwtConfig->algo);

        return $this->respond([
            'status'  => 'success',
            'message' => 'Login successful',
            'user'    => [
                'id'       => $user['id'],
                'username' => $user['username'],
                'email'    => $user['email'] ?? null,
                'section'  => $user['section_id'] ?? null,
            ],
            'token'   => $jwt,
        ]);
    }

    /**
     * Return the editable properties of a resource object.
     *
     * @param int|string|null $id
     *
     * @return ResponseInterface
     */
    public function edit($id = null)
    {
        //
    }

    /**
     * Add or update a model resource, from "posted" properties.
     *
     * @param int|string|null $id
     *
     * @return ResponseInterface
     */
    public function update($id = null)
    {
        //
    }

    /**
     * Delete the designated resource object from the model.
     *
     * @param int|string|null $id
     *
     * @return ResponseInterface
     */
    public function delete($id = null)
    {
        //
    }
}
