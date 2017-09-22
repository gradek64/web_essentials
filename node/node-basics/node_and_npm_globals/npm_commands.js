
	1) npm globals
			//path to node_modueles
		npm root (show local node_modules directory)
		npm root -g  (show global  node_modules directory)
			//path to node or npm root instalation 
		which npm (show root npm directory)
		which node (show root node directory)
			//path to .bin folder 
		node bin -g (set -g flag for global modules instalation);
		
			//show npm and node version
		npm -version, --v (show version)
		node  -version, --v (show version)
			//show main config values for npm
		npm config list (list cwd,HOME,bin location)	

	2) changing npm configuration
		npm config list (list cwd,HOME,bin location)	
		npm config get prefix (show the location of config location)
		npm config edit (it will open .npmrc file in editor and allow U to make changes)
	
	3) set your own CONFIG VALUE
		npm config set greg value (that creates greg='greg' /Users/ggil01/.npmrc 
		npm config get greg (returns value of the VALUE greg); 
		npm config delete greg (deletes the VALUE greg); 
		
		
	2) checking and updatding package
		npm outdated -g (list all outdated packages)
		npm update <packkage-name> -g (updates to latest vesrion)
		npm update <packkage-name>@<version> -g (updates to speciific version)
				   @~1.2.x  -g (updates to only 1.2-9 max version)	
				   @^1.2.x  -g (updates to 1.3.0  max version but will skip 2.0)	
		npm list <package-name> -g (shows the installed package version)
		npm list -l <package-name> -g (shows the installed package version with details of the package)
		npm outdated -g (list all outdated packages)
	3) show package version 
			by global view and show object 
		npm show <package-name> version -g (show version of the package globally)
		npm view  <package-name> version -g (show version of the package globally)
		npm view  <package-name> discription  -g (show description  of the package globally)
		npm view  <package-name> repository.url  -g (show repository url  of the package globally)
			by list command
		npm list -l <package-name> -g (shows the installed package version with details of the package)

	4) create local package.json
		npm init (that will go through creating package.json with question on the way)
		npm init --yes (that would create package.json with defaults and name of the folder);
	5) install module and save it package.json 
		npm install <package-name> --save (saves in depedencies package.json)
		npm install <package-name> --save-dev (saves in package.json in developemnt depedecies)
