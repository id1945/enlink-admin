import { Directive, AfterViewChecked } from '@angular/core';
declare var $: any; // JQuery

@Directive({
    selector: '[sideNav]'
})
export class SideNavDirective implements AfterViewChecked {

    
    ngAfterViewChecked() {
        $('.side-nav .side-nav-menu:not(.ant-menu-inline-collapsed) li a').click(function(event) {
            if ($(this).parent().hasClass("ant-menu-submenu-open")) {

                $(this).parent().children('.dropdown-menu').slideUp(200, function() {
                    $(this).parent().removeClass("ant-menu-submenu-open");
                });

            } else {
                $(this).parent().parent().children('li.ant-menu-submenu-open').children('.dropdown-menu').slideUp(100);
                $(this).parent().parent().children('li.ant-menu-submenu-open').children('a').removeClass('ant-menu-submenu-open');
                $(this).parent().parent().children('li.ant-menu-submenu-open').removeClass("ant-menu-submenu-open");
                $(this).parent().children('.dropdown-menu').slideDown(100, function() {
                    $(this).parent().addClass("ant-menu-submenu-open");
                });
            }
        });
        
    }
}