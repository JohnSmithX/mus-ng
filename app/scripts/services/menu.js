
'use strict';

function escape(s) {
  return s && s.replace(/%/g, '%25');
}

var sections = [
  {
    name: 'Severs',
    url: '/severs'
  },
  {
    name: 'Charts',
    url: '/charts'
  },
  {
    name: 'Settings',
    url:  '/settings'
  }
];

module.exports = function menu ($rootScope, $location) {

  var menuServer = {
    sections: sections,

    breadcrumbs: [],

    selectSection: function(section) {
      this.currentSection = section;
      if (section) {
        this.breadcrumbs[0] = section;
      } else {
        this.breadcrumbs.length = 0;
      }
    },
    toggleSelectSection: function(section) {
      if (this.isSectionSelected(section)) return;
      this.selectSection(section);
    },

    isSectionSelected: function(section) {
      return this.currentSection === section;
    },

    selectPage: function(page, subSection) {
      this.currentPage = page;
      this.currentPageSubSection = subSection;
      if (subSection) {
        this.breadcrumbs[2] = subSection;
      } else {
        this.breadcrumbs.length = 2;
      }
      if (page) {
        this.breadcrumbs[1] = page;
      } else {
        this.breadcrumbs.length = 1;
      }
    },

    isPageSelected: function(page) {
      return this.currentPage === page;
    },

    breadcrumbUrl: function (index) {
      var segments = this.breadcrumbs.slice(0, index + 1);
      segments.forEach(function (v, i) {
        segments[i] = v.url || v;
      });
      return segments.join('/');
    }
  };

  function onLocationChange() {
    var activated = false;
    var path = $location.$$path;
    sections.forEach(function(section) {
      if (section && section.url) {
        var segments = path.split('/');
        var currSection = segments.slice(0, 2).join('/');
        if (currSection === section.url) {
          // Force escape image repo
          menuServer.selectPage(escape(segments[2]), escape(segments[3]));
          menuServer.selectSection(section);
          activated = true;
        }
      }
    });

    if (!activated) {
      menuServer.selectPage(null, null);
      menuServer.selectSection(null);
      menuServer.breadcrumbs.length = 0;
    }
  }

  $rootScope.$on('$locationChangeSuccess', onLocationChange);

  return menuServer;
}



