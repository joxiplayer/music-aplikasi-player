var myDate = new Date();
            var hrs = myDate.getHours();
        
            var greet;
        
            if (hrs < 12)
                greet = 'Selamat Pagi';
            else if (hrs >= 12 && hrs <= 14)
                greet = 'Selamat Siang';
            else if (hrs >= 13 && hrs <= 18)
                greet = 'Selamat Sore';
            else if (hrs >= 19 && hrs <= 24)
                greet = 'Selamat Malam';
        
            document.getElementById('welcome').innerHTML =
                '<b>' + greet + '</b> ';

                // Your web app's Firebase configuration
      var firebaseConfig = {
        apiKey: "AIzaSyCG_92OLetfydA6KDg2kwweJF4bf4hG7Jw",
        authDomain: "joxiplayer-site.firebaseapp.com",
        databaseURL: "https://joxiplayer-site-default-rtdb.firebaseio.com",
        projectId: "joxiplayer-site",
        storageBucket: "joxiplayer-site.appspot.com",
        messagingSenderId: "288570493379",
        appId: "1:288570493379:web:8c1168c876624cc6a95576",
        measurementId: "G-4J03BRQ7Y1"
      };
      firebase.initializeApp(firebaseConfig);

      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          document.getElementById("img").innerHTML = `
                <p><br /> <img src="${user.photoURL}">
            `;
          document.getElementById("username").innerHTML = `
                <p><br /> Your Name : ${user.displayName}
                   <br /> Your Email : ${user.email}
            `;
          document.getElementById("username-link").innerHTML = `${user.uid}
            `;
            const linkUsername = document.getElementById("username-link");
            const link = document.getElementById("link");
            link.href = link.textContent ;

        }   else {
          window.location = "login/index.html";
        }
      });

      function logout() {
        firebase
          .auth()
          .signOut()
          .then(function () {
            window.location = "login/index.html";
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      showData();