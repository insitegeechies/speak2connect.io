<?php
    
    namespace Wrensitefx\Speak2connect\Templates;
    class NavigationDefault {
        /**
         * @var mixed|null
         */
        private mixed $navClass;
        /**
         * @var mixed|null
         */
        private mixed $navClassMobile;
        /**
         * @var mixed|null
         */
        private mixed $navClassDropdown;
        /**
         * @var mixed|null
         */
        private mixed $navImg;
        /**
         * @var mixed|null
         */
        private mixed $navImgClass;
        /**
         * @var mixed|null
         */
        private mixed $navSiteNameClass;
        /**
         * @var mixed|null
         */
        private mixed $navSiteName;
        /**
         * @var mixed|null
         */
        private mixed $navULClass;
        private array|string $navUL;
        private string $navButton;
        /**
         * @var mixed|null
         */
        private mixed $navClassMobileButton;
        private array $array;
        private string $navULMobile;
        
        public function __construct() {
            $this->navClass();
            $this->navClassMobile();
            $this->navClassDropdown();
            $this->navImgClass();
            $this->navSiteName();
            $this->navSiteNameClass();
            $this->navULClass();
            $this->navClassMobileButton();
            $this->navButton();
        }
        
        
        public function navClass($tailwindcss = null) {
            $this->navClass = $tailwindcss;
            return $this;
        }
        public function navClassMobile($tailwindcss = null) {
            $this->navClassMobile = $tailwindcss;
            return $this;
        }
        public function navClassMobileButton($svg = null) {
            $this->navClassMobileButton = $svg;
            return $this;
        }
        public function navClassDropdown($tailwindcss = null) {
            $this->navClassDropdown = $tailwindcss;
            return $this;
        }
        public function navImg($file) {
            $this->navImg = $file;
            return $this;
        }
        public function navImgClass($tailwindcss = null) {
            $this->navImgClass = $tailwindcss;
            return $this;
        }
        public function navSiteNameClass($tailwindcss = null) {
            $this->navSiteNameClass = $tailwindcss;
            return $this;
        }
        public function navSiteName($sitename = null) {
            $this->navSiteName = $sitename;
            return $this;
        }
        public function navULClass($tailwindcss = null) {
            $this->navULClass = $tailwindcss;
            return $this->navULClass;
        }
        public function navUL(array $array, string $class = null)
        {
            
            foreach($array as $item => $value) {
                $result[] = '<li class="'.$class.'"><a href="'.$value.'">'.$item.'</a></li>';
            }
            return $result;
        }
        public function navULMobile($array)
        {
            return $array;
        }
        public function navButton($array = null): static
        {
            if(is_null($array)) {
                $this->navButton = '';
            } else {
                $this->navButton = '<div class="navbar-end"><a id="navbar-button" href="'.$array["href"].'" class="'.$array["class"].'">'.$array["name"].'</a></div>';
            }
            return $this;
        }
        public function navCompile($array, $class = null): string
        {
            if(!$this->navClass) {
                $this->navClass = 'min-h-24 flex items-center justify-center transition-all duration-700';
            }
            if(!$this->navClassMobile) {
                $this->navClassMobile = 'hover:bg-gold-500 focus:bg-gold-500';
            }
            if(!$this->navClassMobileButton) {
                $this->navClassMobileButton = '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>';
            }
            if(!$this->navSiteName) {
                $this->navSiteName = app_name;
            }
            if(!$this->navSiteNameClass) {
                $this->navSiteNameClass = 'text-xl xs:hidden pb-2 px-4 bg-left-bottom xs:text-flushMahogany-100 bg-gradient-to-r from-secondary to-gold-600 bg-[length:0%_2px] bg-no-repeat transition-all duration-500 ease-out text-secondary dark:text-white';
            }
            if(!$this->navImgClass) {
                $this->navImgClass = 'w-16 bg-black rounded-full';
            }
            if(!$this->navULClass) {
                $this->navULClass = 'menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box min-w-52';
            }
            if(is_null($class)) {
                $class = 'mt-3 z-[1] p-2 shadow bg-base-100';
            }
            $navs = $this->navUL($array, $class);
            
            return '<nav id="navigation" class="'.$this->navClass.'">
    <div class="navbar xs:w-full sm:container m-auto">
        <div class="navbar-start">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden '.$this->navClassMobile.'">
                    '.$this->navClassMobileButton.'
                </div>
                <ul tabindex="0" class="'.$this->navULClass.'">
                    '.print_r($this->navUL($array), true).'
                </ul>
            </div>
            <div><img src="'.$this->navImg.'" class="'.$this->navImgClass.'" alt=""></div>
            <a href="#!" id="site_name" class="'.$this->navSiteNameClass.'">'.$this->navSiteName.'</a>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1 text-secondary dark:text-gray-100">
                
            </ul>
        </div>
        '.$this->navButton.'
    </div>
</nav>';
        }
    }