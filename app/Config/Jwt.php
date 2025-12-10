<?php

namespace Config;

use CodeIgniter\Config\BaseConfig;

class Jwt extends BaseConfig
{

    public string $secret;

    public function __construct()
    {
        $this->secret = getenv('JWT_SECRET');
    }

    public string $algo = 'HS256';
    public int $expires = 3600;
}
