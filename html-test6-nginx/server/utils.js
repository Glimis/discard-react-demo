var projectFile = '/Users/liuChengyua/Desktop/sails';
var nginxFile = '/usr/local/etc/nginx/sails';
var template = nginxFile + '.conf';

var async = require('async');
var fs = require('fs');

module.exports = {
	getFilePath: function(folder, name) {
		var temp = '/';
		if (folder[folder.length - 1] === '/' || name[0] === '/') {
			temp = '';
		}
		return folder + temp + name;
	},
	watchProject: function(projectName) {
		if (isNaN(parseInt(projectName))) {
			return;
		}
		var projectPath = this.getFilePath(projectFile, projectName);
		var nginxPath = this.getFilePath(nginxFile, projectName) + ".conf";
		var createNginx = this.createNginx;
		async.parallel({
				projectExists: function(callback) {
					//验证项目是否存在
					fs.exists(projectPath, function(exists) {
						callback(null, exists);
					})
				},
				nginxExists: function(callback, projectExists) {
					//验证nginx是否存在
					fs.exists(nginxPath, function(exists) {
						callback(null, exists);
					});
				}
			},
			function(err, results) {
				console.log("results", results);
				var projectExists = results.projectExists,
					nginxExists = results.nginxExists;
				if (projectExists && nginxExists) {
					//均存在。。。略
					return;
				} else if (!projectExists && !nginxExists) {
					//均不存在...略
					return;
				} else if (projectExists && !nginxExists) {
					//创建nginx配置文件
					// fs.createReadStream(template).pipe(fs.createWriteStream(nginxPath));
					createNginx(nginxPath, projectPath, projectName);

				} else if (!projectExists && nginxExists) {
					//删除nginx
					fs.unlink(nginxPath, projectName)
				}
			});
	},
	createNginx: function(nginxPath, projectPath, projectName) {
		async.parallel({
				template: function(callback) {
					//验证项目是否存在
					fs.readFile(template, 'utf-8', function(err, data) {
						callback(null, data);
					})
				}
			},
			function(err, results) {
				var obj = {};
				obj.listen = parseInt(projectName);
				obj.projectPath = projectPath;
				var template = results.template;
				var re = /%(.*?)%/,
					match;
				while (match = re.exec(template)) {
					template = template.replace(match[0], obj[match[1]])
				}
				fs.writeFile(nginxPath, template)
			});
	}

}