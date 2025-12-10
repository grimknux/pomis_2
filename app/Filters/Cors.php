<?php

namespace Config;

use CodeIgniter\Config\BaseConfig;

class Cors extends BaseConfig
{
    public array $allowOrigins = [
        'http://localhost:5173',
        'http://ocss.dev.local:5173',
    ];

    public array $allowMethods = ['GET','POST','PUT','DELETE','OPTIONS'];
    public array $allowHeaders = ['Content-Type','Authorization'];
    public bool  $allowCredentials = true;
    public int   $maxAge = 0;
    public array $exposeHeaders = [];
}
