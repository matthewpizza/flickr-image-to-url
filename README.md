# Flickr Image to URL

This is a bookmarklet to get from here `https://c2.staticflickr.com/6/5610/15382160670_e31afa8a30_b.jpg` to here `https://www.flickr.com/photos/existentialmedia/15382160670/`. It is inspired deeply by [this article](https://www.bram.us/2008/01/12/my-priceless-flickr-tip-how-to-find-the-original-flickr-photo-url-and-user-from-a-static-flickr-image-url/) that I return to often.

To use make a bookmark out of the following:

```html
javascript:%28function%28imageUrl%29%7Bif%28imageUrl.indexOf%28%22static.flickr%22%29%3D%3D%3D-1%26%26imageUrl.indexOf%28%22staticflickr%22%29%3D%3D%3D-1%29%7Breturn%7Dvar%20urlParts%3DimageUrl.split%28%22/%22%29%3Bvar%20urlPath%3DurlParts%5BurlParts.length-1%5D%3Bvar%20filenameParts%3DurlPath.split%28%22_%22%29%3Bvar%20photoId%3DfilenameParts%5B0%5D%3Bwindow.location.href%3D%22http%3A//flickr.com/photo.gne%3Fid%3D%22+photoId%7D%29%28window.location.href%29%3B
```
