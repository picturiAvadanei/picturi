			
			// navigare fix 
			window.onload = function() {
				const EFFECT = document.querySelector("#navigareFix");
				window.addEventListener("scroll", scrollEffect);

				function scrollEffect() {
					if(window.scrollY >= 220) {
						EFFECT.style.opacity = "1";
						EFFECT.style.transform = "translateY(0px)";
						EFFECT.style.transition = "1s ease-in-out";
					} else {
						EFFECT.style.opacity = "0";
						EFFECT.style.transform = "translateY(-50px)";
					}
				}
				scrollEffect()
			}

			// apare banda de cautare sub lupa
			function apare_cautare() {
				document.getElementById("cauta").style.animation = "apareCautare 0.5s ease-out forwards 1";
				document.getElementById("buton-inchideCautare").style.display = "inline";
			}
			document.getElementById("buton-cautare").addEventListener("click", function() {
				setTimeout(function() {
					document.getElementById("inchideBandaCautare").style.display = "inline";
					document.getElementById("inchideBandaCautare").style.animation = "deschideCautare 0.4s ease-out forwards";
					document.getElementById("triunghiCautare").style.animation = "dispareTriunghiCautare 0.6s ease-out forwards";
				}, 800);
			});
			document.getElementById("inchideBandaCautare").addEventListener("click", function() {
				document.getElementById("inchideBandaCautare").style.animation = "inchideCautare .5s ease-out forwards ";
			});
			document.getElementById("inchideBandaCautare").addEventListener("click", function() {
				setTimeout(function() {
					document.getElementById("cauta").style.animation = "ascundeCautare 0.6s ease-out forwards";
					document.getElementById("inchideBandaCautare").style.display = "none";
					document.getElementById("triunghiCautare").style.animation = "apareTriunghiCautare 0.6s ease-out forwards";
				}, 500);
			});

			// se schimba tablou din lista TaBLOURI pentru

			// javaScript Media Queries
			// constanta valabila pentru toate functiile de tip- if statement cu argumentul(variabila)- inaltime
			const inaltime = window.matchMedia("(min-width: 1800px)");

			function peisaje() {
				if(inaltime.matches) {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiPentru/sufragerie4.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura7.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "450px";
					document.getElementById("loc_pentru_tablouri").style.height = "280px";
					document.getElementById("loc_pentru_tablouri").style.top = "50px";
				} else {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiPentru/sufragerie4.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura7.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "350px";
					document.getElementById("loc_pentru_tablouri").style.height = "237px";
					document.getElementById("loc_pentru_tablouri").style.top = "20px";
				}
			}

			function flori() {
				document.getElementById("schimba_imaginea").style.backgroundImage = "url('Categorii/flori1.jpg')";
				document.getElementById("loc_pentru_tablouri").style.width = "0";
				document.getElementById("loc_pentru_tablouri").style.height = "0";
			}

			function abstract() {
				document.getElementById("schimba_imaginea").style.backgroundImage = "url('Categorii/abstract2.jpg')";
				document.getElementById("loc_pentru_tablouri").style.width = "0";
				document.getElementById("loc_pentru_tablouri").style.height = "0";
			}

			function piese() {
				document.getElementById("schimba_imaginea").style.backgroundImage = "url('imagini/sufrageriePiese5.jpg')";
				document.getElementById("loc_pentru_tablouri").style.width = "0";
				document.getElementById("loc_pentru_tablouri").style.height = "0";
			}
			// se schimba tablou din lista PENTRU
			function sufragerie() {
				let image = document.getElementById("schimba_imaginea").style.backgroundImage = "url('imagini/sufrageriePiese555.jpg')";
				document.getElementById("loc_pentru_tablouri").style.width = "0";
				document.getElementById("loc_pentru_tablouri").style.height = "0";
			}

			function dormitor() {
				if(inaltime.matches) {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/dormitor3.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura22small.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "350px";
					document.getElementById("loc_pentru_tablouri").style.height = "300px";
					document.getElementById("loc_pentru_tablouri").style.top = "1em";
				} else {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/dormitor3.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura22small.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "220px";
					document.getElementById("loc_pentru_tablouri").style.height = "206px";
					document.getElementById("loc_pentru_tablouri").style.top = "1em";
				}
			}

			function bucatarie() {
				document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiPentru/bucatarie1.jpg')";
				document.getElementById("loc_pentru_tablouri").style.width = "0";
				document.getElementById("loc_pentru_tablouri").style.height = "0";
			}

			function hol() {
				if(inaltime.matches) {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiPentru/hol.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura3.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "450px";
					document.getElementById("loc_pentru_tablouri").style.height = "335px";
					document.getElementById("loc_pentru_tablouri").style.top = "20px";
				} else {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiPentru/hol.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura3.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "280px";
					document.getElementById("loc_pentru_tablouri").style.height = "225px";
					document.getElementById("loc_pentru_tablouri").style.top = "-0.5em";
				}
			}

			function asteptare() {
				if(inaltime.matches) {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiPentru/asteptare.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imaginiPentru/pictura14.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "200px";
					document.getElementById("loc_pentru_tablouri").style.height = "249px";
					document.getElementById("loc_pentru_tablouri").style.top = "-25px";
				} else {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiPentru/asteptare.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imaginiPentru/pictura14.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "160px";
					document.getElementById("loc_pentru_tablouri").style.height = "200px";
					document.getElementById("loc_pentru_tablouri").style.top = "-1.5em";
				}
			}

			function studii() {
				if(inaltime.matches) {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiPentru/studii.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura12.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "350px";
					document.getElementById("loc_pentru_tablouri").style.height = "283px";
					document.getElementById("loc_pentru_tablouri").style.top = "20px";
				} else {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiPentru/studii.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura12.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "250px";
					document.getElementById("loc_pentru_tablouri").style.height = "201px";
					document.getElementById("loc_pentru_tablouri").style.top = "1em";
				}
			}

			function lucru() {
				document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiPentru/cameraLucru1.jpg')";
				document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura3.jpg')";
				document.getElementById("loc_pentru_tablouri").style.width = "0";
				document.getElementById("loc_pentru_tablouri").style.height = "0";
			}
			// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ARATA INAPOI TOP~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
			function arata_inapoi_top() {
				var arata = document.getElementById('inapoi_top');
				if(arata.style.display === 'none') {
					arata.style.display = 'block';
				} else {
					arata.style.display = 'block';
				}
			}

			function inapoi_top() {
				document.getElementById('umbra_sus').scrollIntoView();
			}
			// ~~~~~~~~~~~~~~~~~~~~~~~~ARATA INAPOI GALERIE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
			function arata_inapoi() {
				var arata = document.getElementById('inapoi_galerie');
				if(arata.style.display === 'none') {
					arata.style.display = 'block';
				} else {
					arata.style.display = 'block';
				}
			}
			// ~~~~~~~~~~~~~~~~~~~~~~~~ARATA INAPOI OFERTE 1,2,3~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
			function arata_inapoi1() {
				var arata = document.getElementById('inapoi_galerie1');
				if(arata.style.display === 'none') {
					arata.style.display = 'block';
				} else {
					arata.style.display = 'block';
				}
			}

			function arata_inapoi2() {
				var arata = document.getElementById('inapoi_galerie2');
				if(arata.style.display === 'none') {
					arata.style.display = 'block';
				} else {
					arata.style.display = 'block';
				}
			}

			function arata_inapoi3() {
				var arata = document.getElementById('inapoi_galerie3');
				if(arata.style.display === 'none') {
					arata.style.display = 'block';
				} else {
					arata.style.display = 'block';
				}
			}
			// ~~~~~~~~~~~~~~~~~~~~~~~~~~~  slider top vizualizari  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
			let sliderSelector = '.swiper-container',
				options = {
					loop: true,
					speed: 800,
					slidesPerView: 2, // or 'auto'
					spaceBetween: 20,
					centeredSlides: true,
					effect: 'coverflow', // 'cube', 'fade', 'coverflow',
					coverflowEffect: {
						rotate: 50, // Slide rotate in degrees
						stretch: 0, // Stretch space between slides (in px)
						depth: 50, // Depth offset in px (slides translate in Z axis)
						modifier: 1, // Effect multipler
						slideShadows: true // Enables slides shadows
					},
					grabCursor: true,
					parallax: true,
					on: {
						imagesReady: function() {
							this.el.classList.remove('loading');
						}
					}
				};
			let mySwiper = new Swiper(sliderSelector, options);
			mySwiper.init();
			// ~~~~~~~~~~~~~~~~~ tablou 1  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
			function aplica_tablou_dreapta1() {
				if(inaltime.matches) {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/sufragerie3.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imaginiDreaptaSmall/pictura1small2.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "350px";
					document.getElementById("loc_pentru_tablouri").style.height = "285px";
					document.getElementById("loc_pentru_tablouri").style.top = "0px";
					document.getElementById('container_adrese').scrollIntoView();
				} else {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/sufragerie3.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imaginiDreaptaSmall/pictura1small2.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "250px";
					document.getElementById("loc_pentru_tablouri").style.height = "204px";
					document.getElementById("loc_pentru_tablouri").style.top = "-0.3em";
					document.getElementById('container_adrese').scrollIntoView();
				}
			}
			// #2
			function aplica_tablou_dreapta2() {
				if(inaltime.matches) {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/dormitor.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imaginiDreaptaSmall/picturasmall.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "300px";
					document.getElementById("loc_pentru_tablouri").style.height = "240px";
					document.getElementById("loc_pentru_tablouri").style.top = "-40px";
					document.getElementById('container_adrese').scrollIntoView();
				} else {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/dormitor.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imaginiDreaptaSmall/picturasmall.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "200px";
					document.getElementById("loc_pentru_tablouri").style.height = "165px";
					document.getElementById("loc_pentru_tablouri").style.top = "-1.3em";
					document.getElementById('container_adrese').scrollIntoView();
				}
			}
			// #3
			function aplica_tablou_dreapta3() {
				if(inaltime.matches) {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/sufragerie.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imaginiDreaptaSmall/pictura8small.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "300px";
					document.getElementById("loc_pentru_tablouri").style.height = "220px";
					document.getElementById("loc_pentru_tablouri").style.top = "-25px";
					document.getElementById('container_adrese').scrollIntoView();
				} else {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/sufragerie.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imaginiDreaptaSmall/pictura8small.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "200px";
					document.getElementById("loc_pentru_tablouri").style.height = "159px";
					document.getElementById("loc_pentru_tablouri").style.top = "-0.6em";
					document.getElementById('container_adrese').scrollIntoView();
				}
			}
			// #4
			function aplica_tablou_dreapta4() {
				if(inaltime.matches) {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/sufragerie.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imaginiDreaptaSmall/pictura16small.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "250px";
					document.getElementById("loc_pentru_tablouri").style.height = "200px";
					document.getElementById("loc_pentru_tablouri").style.top = "-10px";
					document.getElementById('container_adrese').scrollIntoView();
				} else {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/sufragerie.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imaginiDreaptaSmall/pictura16small.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "150px";
					document.getElementById("loc_pentru_tablouri").style.height = "123px";
					document.getElementById("loc_pentru_tablouri").style.top = "0.2em";
					document.getElementById('container_adrese').scrollIntoView();
				}
			}
			// ````````````````````````````````````schimba tablou galerie`````````````````````````````````````````````
			function tablou_0() {
				if(inaltime.matches) {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/sufragerie.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "300px";
					document.getElementById("loc_pentru_tablouri").style.height = "220px";
					document.getElementById("loc_pentru_tablouri").style.top = "-1em";
					document.getElementById('container_adrese').scrollIntoView();
				} else {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/sufragerie.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "200px";
					document.getElementById("loc_pentru_tablouri").style.height = "165px";
					document.getElementById("loc_pentru_tablouri").style.top = "-1em";
					document.getElementById('container_adrese').scrollIntoView();
				}
			}

			function tablou_3() {
				if(inaltime.matches) {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/sufragerie.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imaginiDreaptaSmall/pictura6small.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "350px";
					document.getElementById("loc_pentru_tablouri").style.height = "214px";
					document.getElementById("loc_pentru_tablouri").style.top = "-0.4em";
					document.getElementById('container_adrese').scrollIntoView();
				} else {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/sufragerie.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imaginiDreaptaSmall/pictura6small.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "250px";
					document.getElementById("loc_pentru_tablouri").style.height = "153px";
					document.getElementById("loc_pentru_tablouri").style.top = "-0.4em";
					document.getElementById('container_adrese').scrollIntoView();
				}
			}

			function tablou_4() {
				if(inaltime.matches) {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/sufragerie.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura4.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "300px";
					document.getElementById("loc_pentru_tablouri").style.height = "214px";
					document.getElementById("loc_pentru_tablouri").style.top = "0.4em";
					document.getElementById('container_adrese').scrollIntoView();
				} else {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/sufragerie.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura4.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "200px";
					document.getElementById("loc_pentru_tablouri").style.height = "143px";
					document.getElementById("loc_pentru_tablouri").style.top = "0.4em";
					document.getElementById('container_adrese').scrollIntoView();
				}
			}

			function tablou_5() {
				if(inaltime.matches) {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/sufragerie.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura5.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "300px";
					document.getElementById("loc_pentru_tablouri").style.height = "214px";
					document.getElementById("loc_pentru_tablouri").style.top = "-0.3em";
					document.getElementById('container_adrese').scrollIntoView();
				} else {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/sufragerie.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imaginiDreaptaSmall/pictura5small.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "200px";
					document.getElementById("loc_pentru_tablouri").style.height = "146px";
					document.getElementById("loc_pentru_tablouri").style.top = "-0.3em";
					document.getElementById('container_adrese').scrollIntoView();
				}
			}

			function tablou_6() {
				if(inaltime.matches) {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/sufragerie.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura14.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "200px";
					document.getElementById("loc_pentru_tablouri").style.height = "250px";
					document.getElementById("loc_pentru_tablouri").style.top = "-30px";
					document.getElementById('container_adrese').scrollIntoView();
				} else {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/sufragerie.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imaginiDreaptaSmall/pictura14small.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "144px";
					document.getElementById("loc_pentru_tablouri").style.height = "180px";
					document.getElementById("loc_pentru_tablouri").style.top = "-1.5em";
					document.getElementById('container_adrese').scrollIntoView();
				}
			}
			// inceput de toamna
			function tablou_7() {
				if(inaltime.matches) {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/sufragerie.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura7.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "350px";
					document.getElementById("loc_pentru_tablouri").style.height = "220px";
					document.getElementById("loc_pentru_tablouri").style.top = "-0.8em";
					document.getElementById('container_adrese').scrollIntoView();
				} else {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/sufragerie.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura7.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "250px";
					document.getElementById("loc_pentru_tablouri").style.height = "169px";
					document.getElementById("loc_pentru_tablouri").style.top = "-0.8em";
					document.getElementById('container_adrese').scrollIntoView();
				}
			}
			// toamna
			function tablou_8() {
				if(inaltime.matches) {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/sufragerie.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura8.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "300px";
					document.getElementById("loc_pentru_tablouri").style.height = "214px";
					document.getElementById("loc_pentru_tablouri").style.top = "-0.6em";
					document.getElementById('container_adrese').scrollIntoView();
				} else {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/sufragerie.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura8.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "200px";
					document.getElementById("loc_pentru_tablouri").style.height = "159px";
					document.getElementById("loc_pentru_tablouri").style.top = "-0.6em";
					document.getElementById('container_adrese').scrollIntoView();
				}
			}
			// peisaj de seara
			function tablou_9() {
				if(inaltime.matches) {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/sufragerie.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura9.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "350px";
					document.getElementById("loc_pentru_tablouri").style.height = "222px";
					document.getElementById("loc_pentru_tablouri").style.top = "-25px";
					document.getElementById('container_adrese').scrollIntoView();
				} else {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/sufragerie.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imaginiDreaptaSmall/pictura9small.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "250px";
					document.getElementById("loc_pentru_tablouri").style.height = "158px";
					document.getElementById("loc_pentru_tablouri").style.top = "-0.5em";
					document.getElementById('container_adrese').scrollIntoView();
				}
			}
			// seara la munte
			function tablou_10() {
				if(inaltime.matches) {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/sufragerie.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura10.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "300px";
					document.getElementById("loc_pentru_tablouri").style.height = "214px";
					document.getElementById("loc_pentru_tablouri").style.top = "-0.6em";
					document.getElementById('container_adrese').scrollIntoView();
				} else {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/sufragerie.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura10.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "200px";
					document.getElementById("loc_pentru_tablouri").style.height = "159px";
					document.getElementById("loc_pentru_tablouri").style.top = "-0.6em";
					document.getElementById('container_adrese').scrollIntoView();
				}
			}
			// peisaj de munte
			function tablou_11() {
				if(inaltime.matches) {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/sufragerie.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura11.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "550px";
					document.getElementById("loc_pentru_tablouri").style.height = "220px";
					document.getElementById("loc_pentru_tablouri").style.top = "-0.4em";
					document.getElementById('container_adrese').scrollIntoView();
				} else {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/sufragerie.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura11.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "450px";
					document.getElementById("loc_pentru_tablouri").style.height = "160px";
					document.getElementById("loc_pentru_tablouri").style.top = "-0.4em";
					document.getElementById('container_adrese').scrollIntoView();
				}
			}
			// rasarit de soare
			function tablou_12() {
				if(inaltime.matches) {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/sufragerie.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura12.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "300px";
					document.getElementById("loc_pentru_tablouri").style.height = "240px";
					document.getElementById("loc_pentru_tablouri").style.top = "-30px";
					document.getElementById('container_adrese').scrollIntoView();
				} else {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/sufragerie.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura12.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "200px";
					document.getElementById("loc_pentru_tablouri").style.height = "161px";
					document.getElementById("loc_pentru_tablouri").style.top = "-0.5em";
					document.getElementById('container_adrese').scrollIntoView();
				}
			}
			// padure de plopi
			function tablou_13() {
				if(inaltime.matches) {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/sufragerie.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura13.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "220px";
					document.getElementById("loc_pentru_tablouri").style.height = "220px";
					document.getElementById("loc_pentru_tablouri").style.top = "-0.8em";
					document.getElementById('container_adrese').scrollIntoView();
				} else {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/sufragerie.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imaginiDreaptaSmall/pictura13small.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "170px";
					document.getElementById("loc_pentru_tablouri").style.height = "170px";
					document.getElementById("loc_pentru_tablouri").style.top = "-0.8em";
					document.getElementById('container_adrese').scrollIntoView();
				}
			}
			// vaza cu lilieci
			function tablou_15() {
				if(inaltime.matches) {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/sufragerie.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura15.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "180px";
					document.getElementById("loc_pentru_tablouri").style.height = "224px";
					document.getElementById("loc_pentru_tablouri").style.top = "-15px";
					document.getElementById('container_adrese').scrollIntoView();
				} else {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/sufragerie.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura15.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "136px";
					document.getElementById("loc_pentru_tablouri").style.height = "170px";
					document.getElementById("loc_pentru_tablouri").style.top = "-0.9em";
					document.getElementById('container_adrese').scrollIntoView();
				}
			}
			// toamna la tara
			function tablou_16() {
				if(inaltime.matches) {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/sufragerie.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imaginiDreaptaSmall/pictura16small.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "200px";
					document.getElementById("loc_pentru_tablouri").style.height = "164px";
					document.getElementById("loc_pentru_tablouri").style.top = "10px";
					document.getElementById('container_adrese').scrollIntoView();
				} else {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/sufragerie.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imaginiDreaptaSmall/pictura16small.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "150px";
					document.getElementById("loc_pentru_tablouri").style.height = "123px";
					document.getElementById("loc_pentru_tablouri").style.top = "0.2em";
					document.getElementById('container_adrese').scrollIntoView();
				}
			}
			// peisaj cu maci 4 piese
			function tablou_17() {
				document.getElementById("schimba_imaginea").style.backgroundImage = "url('imagini/sufrageriePiese3.jpg')";
				document.getElementById("loc_pentru_tablouri").style.width = "0";
				document.getElementById("loc_pentru_tablouri").style.height = "0";
				document.getElementById('container_adrese').scrollIntoView();
			}
			// peisaj de munte 3 piese
			function tablou_18() {
				document.getElementById("schimba_imaginea").style.backgroundImage = "url('imagini/sufrageriePiese555.jpg')";
				document.getElementById("loc_pentru_tablouri").style.width = "0";
				document.getElementById("loc_pentru_tablouri").style.height = "0";
				document.getElementById('container_adrese').scrollIntoView();
			}
			// peisaj cu maci 4 piese
			function tablou_19() {
				document.getElementById("schimba_imaginea").style.backgroundImage = "url('imagini/sufrageriePiese5.jpg')";
				document.getElementById("loc_pentru_tablouri").style.width = "0";
				document.getElementById("loc_pentru_tablouri").style.height = "0";
				document.getElementById('container_adrese').scrollIntoView();
			}

			function inapoi_galerie() {
				document.getElementById('galerie_picturi').scrollIntoView();
			}

			function inapoi_oferta1() {
				document.getElementById('tablou1').scrollIntoView();
			}

			function inapoi_oferta2() {
				document.getElementById('tablou2').scrollIntoView();
			}

			function inapoi_oferta3() {
				document.getElementById('tablou3').scrollIntoView();
			}
			// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ functii tablou oferta ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~// 
			// primul tablou oferta
			function sufragerie1() {
				if(inaltime.matches) {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/sufragerie.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura1.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "300px";
					document.getElementById("loc_pentru_tablouri").style.height = "214px";
					document.getElementById("loc_pentru_tablouri").style.top = "-1.2em";
					document.getElementById('container_adrese').scrollIntoView();
				} else {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/sufragerie.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura1.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "210px";
					document.getElementById("loc_pentru_tablouri").style.height = "173px";
					document.getElementById("loc_pentru_tablouri").style.top = "-1.2em";
					document.getElementById('container_adrese').scrollIntoView();
				}
			}

			function dormitor1() {
				if(inaltime.matches) {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/dormitor3.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura1.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "300px";
					document.getElementById("loc_pentru_tablouri").style.height = "214px";
					document.getElementById("loc_pentru_tablouri").style.top = "70px";
					document.getElementById('container_adrese').scrollIntoView();
				} else {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/dormitor3.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura1.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "210px";
					document.getElementById("loc_pentru_tablouri").style.height = "173px";
					document.getElementById("loc_pentru_tablouri").style.top = "25px";
					document.getElementById('container_adrese').scrollIntoView();
				}
			}

			function decor1() {
				if(inaltime.matches) {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/decor.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura1.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "300px";
					document.getElementById("loc_pentru_tablouri").style.height = "214px";
					document.getElementById("loc_pentru_tablouri").style.top = "50px";
					document.getElementById('container_adrese').scrollIntoView();
				} else {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/decor.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura1.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "210px";
					document.getElementById("loc_pentru_tablouri").style.height = "173px";
					document.getElementById("loc_pentru_tablouri").style.top = "24px";
					document.getElementById('container_adrese').scrollIntoView();
				}
			}

			function inapoi_galerie1() {
				document.getElementById('tablou1').scrollIntoView();
			}
			// 2
			function sufragerie2() {
				if(inaltime.matches) {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/sufragerie.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura2.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "300px";
					document.getElementById("loc_pentru_tablouri").style.height = "214px";
					document.getElementById("loc_pentru_tablouri").style.top = "-1.2em";
					document.getElementById('container_adrese').scrollIntoView();
				} else {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/sufragerie.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura2.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "210px";
					document.getElementById("loc_pentru_tablouri").style.height = "173px";
					document.getElementById("loc_pentru_tablouri").style.top = "-1.2em";
					document.getElementById('container_adrese').scrollIntoView();
				}
			}

			function dormitor2() {
				if(inaltime.matches) {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/dormitor3.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura2.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "300px";
					document.getElementById("loc_pentru_tablouri").style.height = "214px";
					document.getElementById("loc_pentru_tablouri").style.top = "70px";
					document.getElementById('container_adrese').scrollIntoView();
				} else {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/dormitor3.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura2.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "210px";
					document.getElementById("loc_pentru_tablouri").style.height = "173px";
					document.getElementById("loc_pentru_tablouri").style.top = "30px";
					document.getElementById('container_adrese').scrollIntoView();
				}
			}

			function decor2() {
				if(inaltime.matches) {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/decor.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura2.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "300px";
					document.getElementById("loc_pentru_tablouri").style.height = "214px";
					document.getElementById("loc_pentru_tablouri").style.top = "50px";
					document.getElementById('container_adrese').scrollIntoView();
				} else {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/decor.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura2.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "210px";
					document.getElementById("loc_pentru_tablouri").style.height = "173px";
					document.getElementById("loc_pentru_tablouri").style.top = "24px";
					document.getElementById('container_adrese').scrollIntoView();
				}
			}

			function inapoi_galerie2() {
				document.getElementById('tablou2').scrollIntoView();
			}
			// 3
			function sufragerie3() {
				if(inaltime.matches) {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/sufragerie.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura3.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "300px";
					document.getElementById("loc_pentru_tablouri").style.height = "214px";
					document.getElementById("loc_pentru_tablouri").style.top = "-1.2em";
					document.getElementById('container_adrese').scrollIntoView();
				} else {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/sufragerie.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura3.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "210px";
					document.getElementById("loc_pentru_tablouri").style.height = "173px";
					document.getElementById("loc_pentru_tablouri").style.top = "-1.2em";
					document.getElementById('container_adrese').scrollIntoView();
				}
			}

			function dormitor3() {
				if(inaltime.matches) {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/dormitor3.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura3.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "300px";
					document.getElementById("loc_pentru_tablouri").style.height = "214px";
					document.getElementById("loc_pentru_tablouri").style.top = "70px";
					document.getElementById('container_adrese').scrollIntoView();
				} else {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/dormitor3.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura3.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "210px";
					document.getElementById("loc_pentru_tablouri").style.height = "173px";
					document.getElementById("loc_pentru_tablouri").style.top = "25px";
					document.getElementById('container_adrese').scrollIntoView();
				}
			}

			function decor3() {
				if(inaltime.matches) {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/decor.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura3.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "300px";
					document.getElementById("loc_pentru_tablouri").style.height = "214px";
					document.getElementById("loc_pentru_tablouri").style.top = "50px";
					document.getElementById('container_adrese').scrollIntoView();
				} else {
					document.getElementById("schimba_imaginea").style.backgroundImage = "url('imaginiBlank/decor.jpg')";
					document.getElementById("loc_pentru_tablouri").style.backgroundImage = "url('imagini/pictura3.jpg')";
					document.getElementById("loc_pentru_tablouri").style.width = "210px";
					document.getElementById("loc_pentru_tablouri").style.height = "173px";
					document.getElementById("loc_pentru_tablouri").style.top = "24px";
					document.getElementById('container_adrese').scrollIntoView();
				}
			}

			function inapoi_galerie3() {
				document.getElementById('tablou3').scrollIntoView();
			}
			document.getElementById("inapoi_galerie").addEventListener("click", function() {
				document.getElementById("inapoi_galerie").style.display = "none";
			});
			document.getElementById("inapoi_top").addEventListener("click", function() {
				document.getElementById("inapoi_top").style.display = "none";
			});
			document.getElementById("inapoi_galerie1").addEventListener("click", function() {
				document.getElementById("inapoi_galerie1").style.display = "none";
			});
			document.getElementById("inapoi_galerie2").addEventListener("click", function() {
				document.getElementById("inapoi_galerie2").style.display = "none";
			});
			document.getElementById("inapoi_galerie3").addEventListener("click", function() {
				document.getElementById("inapoi_galerie3").style.display = "none";
			});
			document.getElementById("galerie_picturi").addEventListener("click", function() {
				document.getElementById("inapoi_galerie1").style.display = "none";
				document.getElementById("inapoi_galerie2").style.display = "none";
				document.getElementById("inapoi_galerie3").style.display = "none";
				document.getElementById("inapoi_top").style.display = "none";
			});
			document.getElementById("continut1-1").addEventListener("click", function() {
				document.getElementById("inapoi_galerie").style.display = "none";
				document.getElementById("inapoi_galerie2").style.display = "none";
				document.getElementById("inapoi_galerie3").style.display = "none";
				document.getElementById("inapoi_top").style.display = "none";
			});
			document.getElementById("continut1-2").addEventListener("click", function() {
				document.getElementById("inapoi_galerie").style.display = "none";
				document.getElementById("inapoi_galerie2").style.display = "none";
				document.getElementById("inapoi_galerie3").style.display = "none";
				document.getElementById("inapoi_top").style.display = "none";
			});
			document.getElementById("continut1-3").addEventListener("click", function() {
				document.getElementById("inapoi_galerie").style.display = "none";
				document.getElementById("inapoi_galerie2").style.display = "none";
				document.getElementById("inapoi_galerie3").style.display = "none";
				document.getElementById("inapoi_top").style.display = "none";
			});
			document.getElementById("continut2-1").addEventListener("click", function() {
				document.getElementById("inapoi_galerie").style.display = "none";
				document.getElementById("inapoi_galerie1").style.display = "none";
				document.getElementById("inapoi_galerie3").style.display = "none";
				document.getElementById("inapoi_top").style.display = "none";
			});
			document.getElementById("continut2-2").addEventListener("click", function() {
				document.getElementById("inapoi_galerie").style.display = "none";
				document.getElementById("inapoi_galerie1").style.display = "none";
				document.getElementById("inapoi_galerie3").style.display = "none";
				document.getElementById("inapoi_top").style.display = "none";
			});
			document.getElementById("continut2-3").addEventListener("click", function() {
				document.getElementById("inapoi_galerie").style.display = "none";
				document.getElementById("inapoi_galerie1").style.display = "none";
				document.getElementById("inapoi_galerie3").style.display = "none";
				document.getElementById("inapoi_top").style.display = "none";
			});
			document.getElementById("continut3-1").addEventListener("click", function() {
				document.getElementById("inapoi_galerie").style.display = "none";
				document.getElementById("inapoi_galerie1").style.display = "none";
				document.getElementById("inapoi_galerie2").style.display = "none";
				document.getElementById("inapoi_top").style.display = "none";
			});
			document.getElementById("continut3-2").addEventListener("click", function() {
				document.getElementById("inapoi_galerie").style.display = "none";
				document.getElementById("inapoi_galerie1").style.display = "none";
				document.getElementById("inapoi_galerie2").style.display = "none";
				document.getElementById("inapoi_top").style.display = "none";
			});
			document.getElementById("continut3-3").addEventListener("click", function() {
				document.getElementById("inapoi_galerie").style.display = "none";
				document.getElementById("inapoi_galerie1").style.display = "none";
				document.getElementById("inapoi_galerie2").style.display = "none";
				document.getElementById("inapoi_top").style.display = "none";
			});
			document.getElementById("imagine_continuare_dreapta").addEventListener("click", function() {
				document.getElementById("inapoi_galerie").style.display = "none";
				document.getElementById("inapoi_galerie1").style.display = "none";
				document.getElementById("inapoi_galerie2").style.display = "none";
				document.getElementById("inapoi_galerie3").style.display = "none";
			});
			document.getElementById("container_sus").addEventListener("click", function() {
				document.getElementById("inapoi_galerie").style.display = "none";
				document.getElementById("inapoi_galerie1").style.display = "none";
				document.getElementById("inapoi_galerie2").style.display = "none";
				document.getElementById("inapoi_galerie3").style.display = "none";
				document.getElementById("inapoi_top").style.display = "none";
			});
			document.getElementById("container_categorii_tablouri").addEventListener("click", function() {
				document.getElementById("inapoi_galerie").style.display = "none";
				document.getElementById("inapoi_galerie1").style.display = "none";
				document.getElementById("inapoi_galerie2").style.display = "none";
				document.getElementById("inapoi_galerie3").style.display = "none";
				document.getElementById("inapoi_top").style.display = "none";
			});
			document.getElementById("container_tablouri_pentru").addEventListener("click", function() {
				document.getElementById("inapoi_galerie").style.display = "none";
				document.getElementById("inapoi_galerie1").style.display = "none";
				document.getElementById("inapoi_galerie2").style.display = "none";
				document.getElementById("inapoi_galerie3").style.display = "none";
				document.getElementById("inapoi_top").style.display = "none";
			});