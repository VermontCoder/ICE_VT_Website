document.addEventListener('DOMContentLoaded', function () {
    var headerEl = document.getElementById('header-placeholder');
    var footerEl = document.getElementById('footer-placeholder');

    if (headerEl) {
        fetch('header.html')
            .then(function (r) { return r.text(); })
            .then(function (html) { headerEl.innerHTML = html; });
    }

    if (footerEl) {
        fetch('footer.html')
            .then(function (r) { return r.text(); })
            .then(function (html) { footerEl.innerHTML = html; });
    }
});
