angular.module('templates-app', ['details/details.tpl.html', 'home/home.tpl.html', 'myBooks/myBooks.tpl.html', 'search/search.tpl.html']);

angular.module("details/details.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("details/details.tpl.html",
    "<div class=\"row\">\n" +
    "    <h1 class=\"page-header\">\n" +
    "        Details\n" +
    "        <small>{{name}}</small>\n" +
    "    </h1>\n" +
    "    <a ui-sref=\"myBooks\" ng-click=\"saveBook(book)\">save to my books <i class=\"fa fa-plus-circle\"></i></a>\n" +
    "    <p>{{book.volumeInfo.title}}</p>\n" +
    "    <img ng-cloak ng-src=\"{{book.volumeInfo.imageLinks.thumbnail}}\">\n" +
    "    <p>{{book.volumeInfo.description}}</p>\n" +
    "\n" +
    "\n" +
    "    <div class=\"dropdown btn-group\">\n" +
    "        <a class=\"btn dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n" +
    "            Options...\n" +
    "            <span class=\"caret\"></span>\n" +
    "        </a>\n" +
    "        <ul class=\"dropdown-menu\">\n" +
    "            <li>\n" +
    "                <a> some choice</a>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <a> some other choice</a>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"jumbotron\">\n" +
    "  <h1>Some app.</h1>\n" +
    "\n" +
    "  <p class=\"lead\">\n" +
    "    Everything you need to kickstart AngularJS projects: blah.\n" +
    "  </p>\n" +
    "\n" +
    "  <ul class=\"list-inline social-buttons\">\n" +
    "    <!--<li plus-one></li>-->\n" +
    "  </ul> \n" +
    "  \n" +
    "  <div class=\"btn-group\">\n" +
    "    <a href ui-sref=\"search\" class=\"btn btn-large btn-default\">\n" +
    "      <i class=\"fa fa-book\"></i>\n" +
    "      Search for a book\n" +
    "    </a>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("myBooks/myBooks.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("myBooks/myBooks.tpl.html",
    "<div class=\"row\">\n" +
    "\n" +
    "    <h1 class=\"page-header\">\n" +
    "        My Books\n" +
    "        <small>{{name}}</small>\n" +
    "    </h1>\n" +
    "\n" +
    "    <form  ng-show=\"myBooks.length\" id=\"findBook\" class=\"form-inline form-search\" name=\"findBook\">\n" +
    "        <p>You've read {{readCount.read}} books</p>\n" +
    "        <p>You have {{readCount.unread}} books to read <span ng-show=\"readCount.unread == 0\">Hooray! <i class=\"fa fa-thumbs-up\"></i></span> </p>\n" +
    "\n" +
    "        <label>Filter your books\n" +
    "            <input id=\"in\" type=\"text\" ng-model=\"query\" class=\"search-query input-medium\" />\n" +
    "        </label>\n" +
    "    </form>\n" +
    "    <div ng-show=\"myBooks.length\" ng-repeat=\"book in myBooks | filter:query \">\n" +
    "        <p class=\"{{book.read}}\">\n" +
    "            <img ng-src=\"{{book.img}}\">\n" +
    "            <a href ui-sref=\"details({ id: book.id })\">{{book.title}}</a>\n" +
    "            &nbsp; - &nbsp;\n" +
    "            <input type=\"checkbox\" ng-model=\"book.read\">\n" +
    "        </p>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("search/search.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("search/search.tpl.html",
    "<div class=\"row\">\n" +
    "    <h1 class=\"page-header\">Google Books v5</h1>\n" +
    "\n" +
    "    <div class=\"container-fluid\" style=\"padding-left: 10px\">\n" +
    "        <form id=\"myForm\" class=\"form-inline form-search\" name=\"myForm\">\n" +
    "            <label>Search for\n" +
    "                <input id=\"in\" type=\"text\" ng-model=\"searchTerm\" class=\"search-query input-medium\" />\n" +
    "            </label>\n" +
    "            <button class=\"btn btn-primary\" ng-click=\"doSearch()\"> Search</button>\n" +
    "        </form>\n" +
    "        <table id=\"resultsTbl\" class=\"table table-striped\" ng-show=\"bookResults.length\">\n" +
    "            <thead>\n" +
    "            <tr>\n" +
    "                <th>{{bookResults.length}} results</th>\n" +
    "            </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "            <tr ng-repeat=\"item in bookResults\">\n" +
    "                <td><a ng-href=\"{{item.volumeInfo.infoLink}}\" target=\"_blank\"><img ng-src=\"{{item.volumeInfo.imageLinks.smallThumbnail}}\" /></a></td>\n" +
    "                <td><a ui-sref=\"details({ id: item.id })\">{{item.volumeInfo.title}}</a><br />\n" +
    "                    By: {{item.volumeInfo.authors}}<br />\n" +
    "                    Published: {{item.volumeInfo.publisher}}, {{item.volumeInfo.publishedDate}}\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "");
}]);
