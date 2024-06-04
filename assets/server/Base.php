<?php
    
    namespace Wrensitefx\Speak2connect;
    use Dotenv\Dotenv;
use Wrensitefx\Speak2connect\Controller\Display;
    use Wrensitefx\Speak2connect\Controller\Settings;
    use Wrensitefx\Speak2connect\Controller\Terminal;
    use Wrensitefx\Speak2connect\Core\Server;
    use Wrensitefx\Speak2connect\Templates\Content;
    use Wrensitefx\Speak2connect\Templates\NavigationDefault;
    
    class Base
    {
        public Terminal $terminal;
        public Dotenv $dotenv;
        public NavigationDefault $navigation;
        public Display $display;
        public Server $server;
        public Settings $settings;
        public Content $content;
        
        public function __construct() {
            $this->dotenv = Dotenv::createImmutable(__DIR__);
            $this->dotenv->load();
            $this->terminal = new Terminal();
            $this->server = new Server();
            $this->navigation = new NavigationDefault();
            $this->display = new Display();
            $this->settings = new Settings();
            $this->content = new Content();
            
            define("server", $this->server->connect());
        }
    }