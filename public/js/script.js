window.onload = function() {
    if (document.querySelector('.article-share-link')) {
        document.querySelector('.article-share-link')
            .addEventListener('click', function(evt) {
                var url = evt.target.getAttribute('data-url');
                var encodedUrl = encodeURIComponent(url);
                var twitterUrl = 'https://twitter.com/intent/tweet?url=' + encodedUrl;
                window.open(twitterUrl, '_blank');
            },
            false);
    }
};
