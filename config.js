var config = {
  style: 'mapbox://styles/daltonwb/clwgjjuqd00pv01qo55nc2upg',
  accessToken: 'pk.eyJ1IjoiZGFsdG9ud2IiLCJhIjoiOWdSSXFQSSJ9.HZyjh4g3TAAOAncwelv9Vw&fresh=true',
  showMarkers: false,
  markerColor: '#3FB1CE',
  inset: false,
  theme: 'light',
  projection: 'globe',
  use3dTerrain: false,
  title: '<a href="https://www.crisisgroup.org" target="_blank"><img id="icg" src="images/icg-oj.png" /></a><br /><video id="background-video" autoplay loop muted poster="images/poster.jpg"><source src="images/aerial.mp4" type="video/mp4"></video><h1>The 2024 EU Watch List</h1><p class="hedp">Lorem aliquip cillum aute cupidatat non enim Lorem. Officia labore fugiat dolore nulla id esse ex deserunt sit. Consequat sint id sint aliquip aliquip irure labore ad et aliquip velit. Pariatur deserunt consequat incididunt enim consequat deserunt aliquip proident consequat.</p>' + '<a id="freeExplore" href="#INTRO"> BEGIN &nbsp;&nbsp; &#8595; </a>',
  subtitle: '',
  byline: '',
  footer: '<h4>Credits</h4><strong>Lead Contributors</strong>: EU team<br /><strong>Visualizations & Design</strong>: Paul Franz, Claire Boccon-Gibod and Michelle Malaney <br /><strong>Support</strong>: <br /><br /><a href="https://www.crisisgroup.org/legal" target="_blank">Privacy Policy & Legal</a></div>',
  chapters: [
    {
      id: 'INTRO',
      alignment: 'center',
      hidden: false,
      title: 'Intro Text Here',
      image: '',
      description: 'Consectetur qui amet deserunt quis consectetur cillum sit sunt deserunt dolor ea sunt. Duis occaecat nostrud dolore amet et in quis mollit dolore reprehenderit ut qui. Eu do consectetur culpa irure ad veniam culpa magna fugiat pariatur est mollit anim. Velit enim dolore magna ex nisi. Laborum id excepteur aute excepteur reprehenderit excepteur ullamco ipsum culpa ea ullamco. In ullamco ut voluptate minim ad eu nostrud.' + '<br /><br />' + 'Scroll down to continue. &#8595;</strong>',
      location: {
        center: [-35.07977, 21.55533],
        zoom: 2.25,
        pitch: 16,
        bearing: 7.20
      },
      mapAnimation: 'flyTo',
      rotateAnimation: true,
      callback: '',
      onChapterEnter: [
        {
          layer: 'layer-with-pulsing-dot',
          duration: 2000,
          opacity: 1
        },
        {
          layer: 'road-draw-line',
          duration: 2000,
          opacity: 0
        }
      ],
      onChapterExit: [
        {
          layer: 'layer-with-pulsing-dot',
          duration: 2000,
          opacity: 0
        }
      ]
    },
    {
      id: 'ISR',
      alignment: 'left',
      hidden: false,
      title: 'ISRAEL AND HIZBOLLAH',
      image: '',
      description: 'Protests have rocked Iran for months. The regime has killed hundreds with its brutal response. Meanwhile, crisis over Iran’s nuclear program is brewing, with talks to revive the 2015 nuclear deal in a deep freeze.' + '<div class="spacer"></div>' + '<a href="https://www.crisisgroup.org/global/10-conflicts-watch-2023#iran" target="_blank">&#8594; [Read more]</a>',
      location: {
        center: [35.08351, 32.23019],
        zoom: 7.5,
        pitch: 0,
        bearing: 0,
        speed: .7,
        bbox: [[28.06034, 29.49946], [42.21180, 34.85895]]
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: 'roadDraw',
      onChapterEnter: [
        {
          layer: 'layer-with-pulsing-dot',
          duration: 2000,
          opacity: 0
        },
        {
          layer: 'road-draw-line',
          duration: 2000,
          opacity: 1
        },
        {
          layer: 'ISRAEL',
          duration: 2000,
          opacity: 1
        },
        {
          layer: 'LEBANON',
          duration: 2000,
          opacity: 1
        },
        {
          layer: 'damascus',
          duration: 2000,
          opacity: 1
        },
        {
          layer: 'gaza_strip',
          duration: 2000,
          opacity: 1
        },
        {
          layer: 'west_bank',
          duration: 2000,
          opacity: 1
        },
        {
          layer: 'israel-fill',
          duration: 2000,
          opacity: .7
        },
        {
          layer: 'palestine',
          duration: 2000,
          opacity: 1
        }
      ],
      onChapterExit: [
        {
          layer: 'road-draw-line',
          duration: 2000,
          opacity: 0
        },
        {
          layer: 'ISRAEL',
          duration: 2000,
          opacity: 0
        },
        {
          layer: 'LEBANON',
          duration: 2000,
          opacity: 0
        },
        {
          layer: 'damascus',
          duration: 2000,
          opacity: 0
        },
        {
          layer: 'gaza_strip',
          duration: 2000,
          opacity: 0
        },
        {
          layer: 'west_bank',
          duration: 2000,
          opacity: 0
        },
        {
          layer: 'israel-fill',
          duration: 2000,
          opacity: 0
        },
        {
          layer: 'palestine',
          duration: 2000,
          opacity: 0
        }
      ]
    },
    {
      id: 'SUDAN',
      alignment: 'full',
      hidden: false,
      title: 'SUDAN',
      image: 'images/sudan.png',
      description: 'Adipisicing velit deserunt mollit amet dolor. Voluptate eiusmod nostrud ex eu non. Culpa anim elit magna sint laborum. Aute consectetur duis fugiat tempor nulla eu adipisicing. Ea adipisicing laboris deserunt in ipsum officia.' + '<div class="spacer"></div>' + '<a href="https://www.crisisgroup.org/global/10-conflicts-watch-2023#ukraine" target="_blank">&#8594; [Read more]</a>',
      location: {
        center: [27.75505, 15.19553],
        zoom: 5,
        pitch: 16,
        bearing: 7.2,
        speed: .6
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'layer-with-pulsing-dot',
          duration: 2000,
          opacity: 0
        }
      ],
      onChapterExit: [

      ]
    },
    {
      id: 'PHP',
      alignment: 'left',
      hidden: false,
      title: 'PHILIPPINES',
      image: '',
      description: 'Aliquip culpa nisi duis dolor adipisicing mollit sit. Eu in incididunt nisi enim adipisicing velit. Nostrud duis consectetur cupidatat ea cillum irure est aliqua reprehenderit tempor.' + '<div class="spacer"></div>' + '<a href="https://www.crisisgroup.org/global/10-conflicts-watch-2023#armenia" target="_blank">&#8594; [Read more]</a>',
      location: {
        center: [115.78357, 10.18953],
        zoom: 4.45,
        pitch: 39,
        bearing: -29.24,
        speed: .4
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'layer-with-pulsing-dot',
          duration: 2000,
          opacity: 0
        },
        {
          layer: '9dash',
          duration: 2000,
          opacity: 1
        }
      ],
      onChapterExit: [
        {
          layer: '9dash',
          duration: 2000,
          opacity: 0
        }
      ]
    },
    {
      id: 'BOS',
      alignment: 'left',
      hidden: false,
      title: 'BOSNIA AND HERZEGOVINA',
      image: '',
      description: 'Dolore ipsum quis nulla est ipsum eiusmod pariatur ipsum excepteur voluptate tempor aute do excepteur. Irure id ullamco culpa enim aliqua commodo qui. Sint Lorem adipisicing commodo quis sint veniam ad incididunt aute. Exercitation do tempor esse enim quis deserunt dolor elit ex. Magna elit incididunt do in mollit commodo. Minim dolor in sint duis anim.' + '<div class="spacer"></div>' + '<a href="https://www.crisisgroup.org/global/10-conflicts-watch-2023#ethiopia" target="_blank">&#8594; [Read more]</a>',
      location: {
        center: [17.30775, 44.12183],
        zoom: 7,
        pitch: 32.5,
        bearing: 30,
        speed: 0.4
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'layer-with-pulsing-dot',
          duration: 2000,
          opacity: 0
        },
        {
          layer: 'bos-her-boundaries',
          duration: 2000,
          opacity: 1
        },
        {
          layer: 'sarajevo',
          duration: 2000,
          opacity: 1
        },
        {
          layer: 'city_dot_sarajevo',
          duration: 2000,
          opacity: 1
        },
        {
          layer: 'banja_luka',
          duration: 2000,
          opacity: 1
        },
        {
          layer: 'city_dot_banja_luka',
          duration: 2000,
          opacity: 1
        },
        {
          layer: 'bosnia-fill',
          duration: 2000,
          opacity: .7
        }
      ],
      onChapterExit: [
        {
          layer: 'bos-her-boundaries',
          duration: 2000,
          opacity: 0
        },
        {
          layer: 'sarajevo',
          duration: 2000,
          opacity: 0
        },
        {
          layer: 'city_dot_sarajevo',
          duration: 2000,
          opacity: 0
        },
        {
          layer: 'banja_luka',
          duration: 2000,
          opacity: 0
        },
        {
          layer: 'city_dot_banja_luka',
          duration: 2000,
          opacity: 0
        },
        {
          layer: 'bosnia-fill',
          duration: 2000,
          opacity: 0
        }
      ]
    },
    {
      id: 'HAITI',
      alignment: 'left',
      hidden: false,
      title: 'HAITI',
      image: '',
      description: 'Ullamco officia cillum mollit incididunt. Voluptate deserunt nisi veniam mollit enim veniam veniam consequat Lorem laborum commodo deserunt dolor. Laborum ea pariatur amet qui. Et sunt tempor sunt do tempor do sit ut commodo aliqua consequat commodo occaecat.' + '<div class="spacer"></div>' + '<a href="https://www.crisisgroup.org/global/10-conflicts-watch-2023#yemen" target="_blank">&#8594; [Read more]</a>',
      location: {
        center: [-72.34721, 18.55458],
        zoom: 12.8,
        pitch: 62,
        bearing: 69,
        speed: 0.5
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: 'rotateData',
      onChapterEnter: [
        {
          layer: 'satellite',
          duration: 2000,
          opacity: 1
        }
      ],
      onChapterExit: [
        {
          layer: 'satellite',
          duration: 2000,
          opacity: 0
        }
      ]
    },
    {
      id: 'POLICY',
      alignment: 'center',
      hidden: false,
      title: 'POLICY RECOMMENDATIONS',
      image: '',
      description: 'Quis velit magna occaecat qui ullamco deserunt dolore elit Lorem velit adipisicing elit commodo proident. Qui mollit dolor non ullamco Lorem duis qui tempor sint anim ullamco laboris. Eu velit cupidatat sint ad laboris deserunt pariatur. Ex occaecat do labore ullamco velit sit sunt incididunt. Culpa exercitation aliqua cupidatat ipsum.' + '<div class="spacer"></div>' + '<a href="https://www.crisisgroup.org/global/10-conflicts-watch-2023#drc" target="_blank">&#8594; [Read more]</a>',
      location: {
        center: [-26.170512, 23.867211],
        zoom: 2,
        pitch: 10.50,
        bearing: 7.20,
        speed: .5
      },
      mapAnimation: 'flyTo',
      rotateAnimation: true,
      callback: 'enableFreetime',
      onChapterEnter: [
        {
          layer: 'layer-with-pulsing-dot',
          duration: 2000,
          opacity: 1
        },
      ],
      onChapterExit: [
        {
          layer: 'layer-with-pulsing-dot',
          duration: 2000,
          opacity: 0
        }
      ]
    }
  ]
};
