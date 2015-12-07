module.exports = function(grunt) {
    grunt.initConfig({
        bump: {
          options: {
            files: ['bower.json', 'x-breadcrumb.html'],
            commit: true,
            commitMessage: '%VERSION%',
            commitFiles: ['bower.json', 'x-breadcrumb.html'],
            createTag: true,
            tagName: '%VERSION%',
            tagMessage: 'Version %VERSION%',
            push: false,
            // pushTo: 'origin',
            globalReplace: false,
            prereleaseName: false,
            regExp: false
          }
        }
    });
    grunt.loadNpmTasks('grunt-bump');
};
