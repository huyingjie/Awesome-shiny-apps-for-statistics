# Contribution Guidelines

* Use the following format: `[STATISTICS CONCEPT](LINK) - DESCRIPTION.`
* The link should be the url linked to Shiny App directly.
* Add one link per pull-request.
* Keep descriptions concise, clear and simple, and end them with a period / stop.
* New categories, or improvements to the existing ones are also welcome.
* Make sure your text editor is set to remove trailing whitespace.

## Quality standard

To stay on the list, projects should follow these quality standards:

* Generally used and useful to the community.
* Actively maintained (even if that just means take care of open issues).
* Stable.
* Documented.
* Tests.

Thanks to all [contributors](https://github.com/huyingjie/Awesome-shiny-apps-for-basic-statistics/graphs/contributors), you're awesome and wouldn't be possible without you!

## Install & Web Development

`README.md` and [the website](http://asas.yingjiehu.com/) have the exact same contents excepty styling. It was achieved by [gulpjs](https://gulpjs.com/). 

* The raw html code is in the file `gulpfile.js`.
* `/src/style/main.css` is the style file.

My computer uses Mac OS. It might be different for Windows OS.

To create the website on your computer, 

1. Open `Terminal`.
2. Change directory to the root of the website.
3. Install gulp.

	1. (optional) If you don't have `npm`, please [install it](https://www.npmjs.com/get-npm) first.

	2. Install gulp by typing the following in the `Terminal`
	
	```
	npm install gulp-cli -g
	```

4. Generate the website `index.html` by typing `gulp` in the Terminal.

	Every time you change `README.md` or `gulpfile.js`, executing `gulp` in the Terminal will update `index.html`.
	


	
