import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

class Html extends React.Component {
  
  printUsingCanvas = () => {

    const input = document.getElementById('app');
    const filename = 'pdf-using-canvas.pdf';
    var HTML_Width = input.offsetWidth;
    var HTML_Height = input.offsetHeight;

    var top_left_margin = 15;
    var PDF_Width = HTML_Width + (top_left_margin * 2);
    var PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
    var canvas_image_width = HTML_Width;
    var canvas_image_height = HTML_Height;

    var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

    html2canvas(input, { allowTaint: true }).then(function (canvas) {
      canvas.getContext('2d');
      var imgData = canvas.toDataURL("image/jpeg", 1.0);
      var pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
      pdf.addImage(imgData, 'PNG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
      for (var i = 1; i <= totalPDFPages; i++) {
        pdf.addPage(PDF_Width, PDF_Height);
        pdf.addImage(imgData, 'JPEG', top_left_margin, -(PDF_Height * i) + (top_left_margin * 4), canvas_image_width, canvas_image_height);
      }

      pdf.save(filename);
    });
  }

  render() {
    return (
      <html lang="en">
        <head>
          <title>Demo App</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
        </head>
        <body id="app">
          <main role="main" className="container">

            <div className="starter-template">
              <h1>Bootstrap starter template</h1>
              <p className="lead">Use this document as a way to quickly start any new project.<br /> All you get is this text and a mostly barebones HTML document.</p>
            </div>
            <div className="container">
              <div className="card">
                <img className="card-img-top" src="/demo.jpg" alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text">This is sample app.</p>
                </div>
                <div className="alert alert-success" role="alert">
                  <h4 className="alert-heading">Well done!</h4>
                  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                  <hr />
                  <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sem nulla, tristique vitae leo sed, rutrum varius velit. Praesent quam libero, suscipit id scelerisque et, interdum a lacus. Praesent eleifend aliquet felis, et fringilla metus tristique non. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean et turpis quis lectus accumsan lobortis. Cras suscipit nibh a sapien scelerisque mattis. Donec ultricies diam ut venenatis semper. Cras vel leo et sapien ultrices lobortis eu in mauris. Nullam sapien purus, condimentum et mollis ac, semper vitae lorem. Morbi pellentesque odio ac elit venenatis vestibulum. Maecenas non risus a diam bibendum placerat.
                    In hac habitasse platea dictumst. Sed et erat erat. Nunc vitae ornare arcu. Cras egestas, arcu ac condimentum sodales, metus velit maximus turpis, ac varius dui neque vel dui. Pellentesque dignissim tincidunt aliquet. Sed venenatis pellentesque mattis. Quisque convallis molestie mauris, a ornare urna vestibulum ullamcorper. Aenean suscipit porta neque, vel semper libero tempor non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean convallis nisl sit amet neque tincidunt, sed tempor tortor cursus. Quisque tortor orci, finibus at tincidunt vitae, varius et nunc.
                    Mauris porttitor mauris ut ligula lacinia consequat. Vestibulum mi ex, maximus sit amet euismod vel, aliquet consectetur urna. Aenean tellus tortor, vestibulum in enim vitae, faucibus blandit magna. Etiam scelerisque libero ex, eu auctor mi pulvinar et. Quisque ut bibendum tellus. Mauris aliquam justo quis erat tempor, sed euismod odio euismod. Donec viverra lorem vel luctus gravida. Ut sed lacus eu arcu pulvinar consequat. Phasellus luctus semper arcu, sit amet rhoncus massa aliquam ut.
                    Curabitur eleifend, metus porta ultrices vulputate, mi est vestibulum purus, sit amet feugiat risus risus sed orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum euismod ultrices mi vulputate pellentesque. Proin ullamcorper sed urna vitae rhoncus. Pellentesque at justo leo. Curabitur iaculis, neque at accumsan interdum, velit eros ultricies sem, in posuere neque odio in enim. Curabitur vitae ligula ultrices, blandit justo quis, fermentum est. Maecenas interdum, tellus ut tempus auctor, mauris mauris maximus sem, sed laoreet nulla tellus sed libero. Sed interdum mauris sapien. Sed vel lorem non nunc tempus venenatis ut at massa. Donec quis dapibus ligula. Sed iaculis varius nisl, at hendrerit lacus vestibulum vel.
                    Fusce vitae justo vel sapien ornare congue nec ac tortor. Etiam nec dolor fermentum, rutrum mauris id, tincidunt urna. Ut a elit ornare, lacinia neque non, pharetra leo. Ut id ornare quam. Ut scelerisque, lectus at lobortis ultricies, arcu nibh iaculis felis, lacinia faucibus tortor nisl sit amet dui. Nulla scelerisque dolor urna, eget sagittis lacus condimentum id. Quisque nec tincidunt neque. Curabitur accumsan erat non orci dignissim gravida. Duis gravida massa ac ipsum bibendum sollicitudin.
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="card">
                <img className="card-img-top" src="/demo.jpg" alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text">This is sample app.</p>
                </div>
                <div className="alert alert-success" role="alert">
                  <h4 className="alert-heading">Well done!</h4>
                  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                  <hr />
                  <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sem nulla, tristique vitae leo sed, rutrum varius velit. Praesent quam libero, suscipit id scelerisque et, interdum a lacus. Praesent eleifend aliquet felis, et fringilla metus tristique non. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean et turpis quis lectus accumsan lobortis. Cras suscipit nibh a sapien scelerisque mattis. Donec ultricies diam ut venenatis semper. Cras vel leo et sapien ultrices lobortis eu in mauris. Nullam sapien purus, condimentum et mollis ac, semper vitae lorem. Morbi pellentesque odio ac elit venenatis vestibulum. Maecenas non risus a diam bibendum placerat.
                    In hac habitasse platea dictumst. Sed et erat erat. Nunc vitae ornare arcu. Cras egestas, arcu ac condimentum sodales, metus velit maximus turpis, ac varius dui neque vel dui. Pellentesque dignissim tincidunt aliquet. Sed venenatis pellentesque mattis. Quisque convallis molestie mauris, a ornare urna vestibulum ullamcorper. Aenean suscipit porta neque, vel semper libero tempor non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean convallis nisl sit amet neque tincidunt, sed tempor tortor cursus. Quisque tortor orci, finibus at tincidunt vitae, varius et nunc.
                    Mauris porttitor mauris ut ligula lacinia consequat. Vestibulum mi ex, maximus sit amet euismod vel, aliquet consectetur urna. Aenean tellus tortor, vestibulum in enim vitae, faucibus blandit magna. Etiam scelerisque libero ex, eu auctor mi pulvinar et. Quisque ut bibendum tellus. Mauris aliquam justo quis erat tempor, sed euismod odio euismod. Donec viverra lorem vel luctus gravida. Ut sed lacus eu arcu pulvinar consequat. Phasellus luctus semper arcu, sit amet rhoncus massa aliquam ut.
                    Curabitur eleifend, metus porta ultrices vulputate, mi est vestibulum purus, sit amet feugiat risus risus sed orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum euismod ultrices mi vulputate pellentesque. Proin ullamcorper sed urna vitae rhoncus. Pellentesque at justo leo. Curabitur iaculis, neque at accumsan interdum, velit eros ultricies sem, in posuere neque odio in enim. Curabitur vitae ligula ultrices, blandit justo quis, fermentum est. Maecenas interdum, tellus ut tempus auctor, mauris mauris maximus sem, sed laoreet nulla tellus sed libero. Sed interdum mauris sapien. Sed vel lorem non nunc tempus venenatis ut at massa. Donec quis dapibus ligula. Sed iaculis varius nisl, at hendrerit lacus vestibulum vel.
                    Fusce vitae justo vel sapien ornare congue nec ac tortor. Etiam nec dolor fermentum, rutrum mauris id, tincidunt urna. Ut a elit ornare, lacinia neque non, pharetra leo. Ut id ornare quam. Ut scelerisque, lectus at lobortis ultricies, arcu nibh iaculis felis, lacinia faucibus tortor nisl sit amet dui. Nulla scelerisque dolor urna, eget sagittis lacus condimentum id. Quisque nec tincidunt neque. Curabitur accumsan erat non orci dignissim gravida. Duis gravida massa ac ipsum bibendum sollicitudin.
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="card">
                <img className="card-img-top" src="/demo.jpg" alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text">This is sample app.</p>
                </div>
                <div className="alert alert-success" role="alert">
                  <h4 className="alert-heading">Well done!</h4>
                  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                  <hr />
                  <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sem nulla, tristique vitae leo sed, rutrum varius velit. Praesent quam libero, suscipit id scelerisque et, interdum a lacus. Praesent eleifend aliquet felis, et fringilla metus tristique non. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean et turpis quis lectus accumsan lobortis. Cras suscipit nibh a sapien scelerisque mattis. Donec ultricies diam ut venenatis semper. Cras vel leo et sapien ultrices lobortis eu in mauris. Nullam sapien purus, condimentum et mollis ac, semper vitae lorem. Morbi pellentesque odio ac elit venenatis vestibulum. Maecenas non risus a diam bibendum placerat.
                    In hac habitasse platea dictumst. Sed et erat erat. Nunc vitae ornare arcu. Cras egestas, arcu ac condimentum sodales, metus velit maximus turpis, ac varius dui neque vel dui. Pellentesque dignissim tincidunt aliquet. Sed venenatis pellentesque mattis. Quisque convallis molestie mauris, a ornare urna vestibulum ullamcorper. Aenean suscipit porta neque, vel semper libero tempor non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean convallis nisl sit amet neque tincidunt, sed tempor tortor cursus. Quisque tortor orci, finibus at tincidunt vitae, varius et nunc.
                    Mauris porttitor mauris ut ligula lacinia consequat. Vestibulum mi ex, maximus sit amet euismod vel, aliquet consectetur urna. Aenean tellus tortor, vestibulum in enim vitae, faucibus blandit magna. Etiam scelerisque libero ex, eu auctor mi pulvinar et. Quisque ut bibendum tellus. Mauris aliquam justo quis erat tempor, sed euismod odio euismod. Donec viverra lorem vel luctus gravida. Ut sed lacus eu arcu pulvinar consequat. Phasellus luctus semper arcu, sit amet rhoncus massa aliquam ut.
                    Curabitur eleifend, metus porta ultrices vulputate, mi est vestibulum purus, sit amet feugiat risus risus sed orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum euismod ultrices mi vulputate pellentesque. Proin ullamcorper sed urna vitae rhoncus. Pellentesque at justo leo. Curabitur iaculis, neque at accumsan interdum, velit eros ultricies sem, in posuere neque odio in enim. Curabitur vitae ligula ultrices, blandit justo quis, fermentum est. Maecenas interdum, tellus ut tempus auctor, mauris mauris maximus sem, sed laoreet nulla tellus sed libero. Sed interdum mauris sapien. Sed vel lorem non nunc tempus venenatis ut at massa. Donec quis dapibus ligula. Sed iaculis varius nisl, at hendrerit lacus vestibulum vel.
                    Fusce vitae justo vel sapien ornare congue nec ac tortor. Etiam nec dolor fermentum, rutrum mauris id, tincidunt urna. Ut a elit ornare, lacinia neque non, pharetra leo. Ut id ornare quam. Ut scelerisque, lectus at lobortis ultricies, arcu nibh iaculis felis, lacinia faucibus tortor nisl sit amet dui. Nulla scelerisque dolor urna, eget sagittis lacus condimentum id. Quisque nec tincidunt neque. Curabitur accumsan erat non orci dignissim gravida. Duis gravida massa ac ipsum bibendum sollicitudin.
                  </div>
                </div>
              </div>
            </div>
          </main>
          <div className="col-sm-12 text-center"><button type="button" className="btn btn-secondary btn-lg" onClick={this.printUsingCanvas}>Generate PDF</button></div>
          <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        </body>
      </html>
    );
  }
}

export default Html;