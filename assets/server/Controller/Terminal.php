<?php
    
    namespace Wrensitefx\Speak2connect\Controller;
    
    defined('template');
    
    class Terminal {
        public function __construct() {
            define('template', $_ENV['TEMPLATE']);
            define("app_name", $_ENV["APP_NAME"]);
            /*define("site_url", $_ENV["SITE_URL"]);
            
            
            define("live_server", filter_var($_ENV["LIVE_SERVER"]??false, FILTER_VALIDATE_BOOLEAN));
            
            define("super_user", $_ENV["APP_USER"]);
            define("super_password", $_ENV["APP_USER_PASSWORD"]);
            define("public_key", $_ENV["APP_PUBLIC_KEY"]);
            define("secret_key", $_ENV["APP_SECRET_KEY"]);
            
            define("db_prefix", $_ENV["DB_PREFIX"]);
            define("db_connect_method", $_ENV["DB_CONNECTION"]);
            define("dbhost", $_ENV["DB_HOST"]);
            define("dbuser", $_ENV["DB_USER"]);
            define("dbpass", $_ENV["DB_PASS"]);
            define("dbname", $_ENV["DB_NAME"]);
            define("dbport", $_ENV["DB_PORT"]);
            define("dbcharset", $_ENV["DB_CHARSET"]);
            
            define("php_auth_user", $_ENV["APP_USER"]);
            define("php_auth_pw", $_ENV["APP_USER_PASSWORD"]);
            
            define("random_session_cookie_name", $_ENV["RANDOM_COOKIE_NAME"]);
            define("domain_cookie_name", $_ENV["DOMAIN_COOKIE_NAME"]);
            define("login_cookie_name", $_ENV["LOGIN_COOKIE_NAME"]);
            define("cookie_lifetime", $_ENV["COOKIE_LIFETIME"]);
            define("remember_cookie", $_ENV["LOGIN_REMEMBER"]);*/
            
        }
        
        public static function file_content(array $preset, string $files): array|bool|string {
            
            $file = match ($files) {
                "site-navbar" => '../assets/templates/'.template.'/public/navigation/navbar.html',
                "aside" => '../assets/templates/'.template.'/admin/navigation/aside.html',
                "alerts_simple" => ['assets/templates/'.template.'/alerts/alert-simple.html', '../assets/templates/'.template.'/alerts/alert-simple.html'],
                "alerts_dismissible" => ['assets/templates/'.template.'/alerts/alert-dismissible.html', '../assets/templates/'.template.'/alerts/alert-dismissible.html'],
                "input" => '../assets/templates/'.template.'/admin/content/input.html',
                "primary-button" => ['assets/templates/'.template.'/buttons/button-primary.html', '../assets/templates/'.template.'/buttons/button-primary.html'],
                "primary-slider" => ['assets/templates/'.template.'/forms/slider-primary.html', '../assets/templates/'.template.'/forms/slider-primary.html'],
            };
            /*$fileContent = file_get_contents($file);
            return str_replace(array_keys($preset), array_values($preset), $fileContent);*/
            if (is_array($file)) {
                foreach ($file as $f) {
                    if (file_exists($f)) {
                        $fileContent = file_get_contents($f);
                        return str_replace(array_keys($preset), array_values($preset), $fileContent);
                    }
                }
                return false; // None of the files exist
            } else {
                if (file_exists($file)) {
                    $fileContent = file_get_contents($file);
                    return str_replace(array_keys($preset), array_values($preset), $fileContent);
                } else {
                    return false; // File doesn't exist
                }
            }
        }
        
        public static function template_exists(): bool
        {
            if(is_dir('../assets/templates/'.template)) {
                return true;
            } else {
                return false;
            }
        }
        
    }