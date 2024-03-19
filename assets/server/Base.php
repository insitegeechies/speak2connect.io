<?php
    
    namespace Wrensitefx\Speak2connect;
    use Dotenv\Dotenv;
    use Wrensitefx\Speak2connect\Controller\Terminal;
    use Wrensitefx\Speak2connect\Templates\NavigationDefault;
    
    class Base
    {
        public Terminal $terminal;
        public Dotenv $dotenv;
        public NavigationDefault $navigation;
        
        public function __construct() {
            $this->dotenv = Dotenv::createImmutable(__DIR__);
            $this->dotenv->load();
            $this->terminal = new Terminal();
            $this->navigation = new NavigationDefault();
        }
    }