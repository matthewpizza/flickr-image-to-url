// Go from https://c2.staticflickr.com/6/5610/15382160670_e31afa8a30_b.jpg
// to https://www.flickr.com/photos/existentialmedia/15382160670/
// with this groovy bookmarklet.

// Thank you https://www.bram.us/2008/01/12/my-priceless-flickr-tip-how-to-find-the-original-flickr-photo-url-and-user-from-a-static-flickr-image-url/
// for this possibility.

(function (imageUrl) {

  // Bail if this doesn't look like a Flickr image URL.
  if (imageUrl.indexOf('static.flickr') === -1 && imageUrl.indexOf('staticflickr') === -1) {
    return;
  }

  var urlParts       = imageUrl.split('/');
  var urlPath        = urlParts[urlParts.length - 1];
  var filenameParts  = urlPath.split('_');
  var photoId        = filenameParts[0];

  window.location.href = 'http://flickr.com/photo.gne?id=' + photoId;

})(window.location.href);
