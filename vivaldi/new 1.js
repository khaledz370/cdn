#main > .mainbar, .mainbar > .toolbar - mainbar, .button - toolbar, .button - toolbar > button {
    height: 50px
}

/* address bar */
.UrlBar - SearchField, .UrlBar - AddressField {
    height: 40px
}

#tabs - container.button - toolbar {
    height: 34px
}

.BookmarkButton {
    height: unset
}

.bookmark - bar.default {
    height: 34px
}

 * : focus - visible {
    outline: none;
}

.color - behind - tabs - on.bookmark - bar button: focus - visible, .color - behind - tabs - on.bookmark - bar button: hover {
    border - radius: 10px
}

/* start-page bookmark button */
button[data - id = "434"], button[data - id = "451"]{
    display: none
}

/* tabs-tabbar-container */
#tabs - tabbar - container, .window - buttongroup > button, #titlebar > button {
    height: 35px!important
}

/* tab-header */
.tab - position.tab.tab - header {
    margin - top: 4px
}

/* bookmarks title font */
.bookmark - bar button.title {
    font - size: 14px
}

/* back of the toolbar */
#main > .mainbar {
    background - color: var(--colorAccentBorderDark);
}

/* toolbar */
.mainbar > .toolbar.toolbar - droptarget.toolbar - mainbar.toolbar - visible.toolbar - large {
    border - radius: 10px 10px 0px 0px;
    background - color: #2e2f37;
    padding - right: 55px;
}

/* tab container */
.win #tabs - container: not(.none).top {
    padding - left: 11px;
}

/* search bar in speed-dail page */
.button - textonly.SpeedDialView - SearchField.iconmenu - container.SearchField.below {
    border - radius: 35px
}

/* search bar in speed-dail page */
.SpeedDialView - Head {
    max - width: 900px!important;
}

/* streamkeys extention */
button[name = 'ekpipjofdicppbepocohdlgenahaneen']img {
    content: url("./Audio.ico");
}

/* bookmark bar */
div.observer > button.bookmarkbarItem {
    margin - bottom: 5px;
}

/* top horizontal bar */
#titlebar > .tabbar - wrapper {
    margin - bottom: 10px
}

/* sandwitch menu */
button.vivaldi[title = "Menu"]{
    top: 41px;
    z - index: 99;
    right: 0;
    left: unset;
    padding - right: 23px;
    padding - left: 23px;
}

/* acount circle icon */
div.button - toolbar: has(button[name = "AccountButton"]) {
    left: 6px
}

/* favicon annoying background */
.transparent - tabbar.tab - position.tab.active.tab - header.favicon: not(.svg), .theme - dark.tab - position.tab.active.tab - header.favicon: not(.svg), .acc - dark.color - behind - tabs - off.tab - position.tab.active.tab - header.favicon: not(.svg) {
    filter: unset!important
}

/* remove the trash icon */

.button - toolbar.toggle - trash {
    opacity: 0;
    pointer - events: none;
    position: absolute
}
