$(function(toggle)
{

  //$('.drop-menu.menu-1').translateX(-16);

});


$(".fa-Dropdown-trigger") && $(".fa-Dropdown-trigger").forEach(function(t) {
    var e = !1
      , n = $('.fa-Dropdown[data-dropdown="' + t.dataset.anchordropdown + '"]')[0];
    t.addEventListener("mouseenter", function(t) {
        t.preventDefault(),
        t.stopPropagation(),
        n.classList.toggle("shown")
    }),
    t.addEventListener("mouseleave", function() {
        setTimeout(function() {
            e || n.classList.remove("shown")
        }, 50)
    }),
    n.addEventListener("mouseenter", function() {
        e = !0
    }),
    n.addEventListener("mouseleave", function(t) {
        e = !1,
        t.target.classList.remove("shown")
    })
})),
$("a.fa-AppGrid-button[data-platform]") && $("a.fa-AppGrid-button[data-platform]").forEach(function(t) {
    t.addEventListener("click", function() {
        window.analytics && window.analytics.track("Download", {
            label: Front.getDataAttr(t, "platform")
        })
    })
});
var itemsWithSublist = document.querySelectorAll(".fa-Navbar-item--with-sublist");
[].concat(_toConsumableArray(itemsWithSublist)).forEach(function(t) {
    t.addEventListener("click", function(t) {
        t.currentTarget.querySelector(".fa-Navbar-sublist").classList.toggle("active")
    })
});

var navEl = document.querySelector(".fa-Navbar")
  , toggleEl = document.querySelector(".fa-Navbar-toggle")
  , isMenuOpen = !1;
if (toggleEl && toggleEl.addEventListener("click", function(t) {
    if (isMenuOpen = !isMenuOpen,
    t.currentTarget.classList.toggle("--open"),
    navEl.classList.toggle("--open"),
    document.documentElement.classList.toggle("no-scroll-mobile"),
    document.body.classList.toggle("no-scroll-mobile"),
    isMenuOpen)
        navEl.classList.remove("closing");
    else {
        navEl.classList.add("closing");
        document.querySelectorAll(".fa-Navbar-sublist.active").forEach(function(t) {
            t.classList.remove("active")
        }),
        setTimeout(function() {
            navEl.classList.remove("closing")
        }, 800)
    }
})
