<html>
    <head>

      

    <style type="text/css">
      body{
        background: linear-gradient(to top right, #80cbc4, #e1bee7, #80ddea, #d1c4e9);
      }
      .m-4{
       background: :rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        box-shadow: 5px 7px 10px rgba(0, 0, 0, .5);
        width: 200px;
        position: absolute;
        top: 0px;
        bottom: 0;
        

      }

      div .head a {
        color: black;
        margin-top: 5px;
       margin-left: 43%;
        font-size: 30px;
        display: block;
        text-decoration: none;
        
      }

       img{
        height: 40px;
        margin-top: 0px;
        margin-left: 50%;
        border-radius: 20px;
      }
      span{
        color: black;
        font-size: 25px;
        text-transform: capitalize;
      }
      .btn-group{
        width: 100%;
       
      
       

      }
      div.btn{
        margin-left: 85%;
        display: block;

      }
      button{
        
        color: white;
      }
       .btn-group:hover span{
        background: rgba(0, 0, 0, 0.7);
        color: white;
       
        border-radius: 3px;
  
      }
      a.home{
        margin-left: 35%;
        font-size: 25px;
        text-decoration: none;
        color: black;
      }

      </style>



    </head>
    <body>
        <div class="container">
            @include('admin.inc.topnav')
            <div align="center">
                @yield('content')
            </div>
        </div>
        
    </body>
</html>