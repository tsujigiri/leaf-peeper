/*
 * Leaf Peeper - a jQuery based slide show
 *
 *
 * Copyright (C) 2011 by Helge Rausch <helge@rausch.io>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


// A demo of the different easing functions can be found here:
// http://gsgd.co.uk/sandbox/jquery/easing/
$.easing.def = "easeOutQuad";

$(function() {
  $('div.slideshow').each(function() {
    var slideshow = $(this);
    var carrier = slideshow.find('div.carrier').first();
    var slides = slideshow.find('div.slide')
    var navigation = slideshow.find('div.navigation')
    carrier.css({width: (slides.size() * 100 + '%')});

    slides.each(function(i) {
      var link_text = $(this).attr('data-name') || (i+1);
      var link_box = $('<div>' + link_text + '</div>');
      navigation.append(link_box);
      if(i == 0)
        link_box.addClass('current_slide');

      link_box.click(function(event) {
        navigation.find('div.current_slide').removeClass('current_slide');
        $(event.currentTarget).addClass('current_slide');
        carrier.animate({left: (i * -100 + '%')}, 400);
      });
    });
  });
});
