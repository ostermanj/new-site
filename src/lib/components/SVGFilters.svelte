<svg class="vsh" width="0" height="0">
  <filter id="noise">
    <feTurbulence type="turbulence" baseFrequency="0.01 0.4"
        numOctaves="1" result="NOISE"/>
    <feDisplacementMap in2="NOISE" in="SourceGraphic"
        scale="30" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
  <filter id="noise-lite">
    <feTurbulence type="turbulence" baseFrequency="0.01 0.4"
        numOctaves="2" result="NOISE"/>
    <feDisplacementMap in2="NOISE" in="SourceGraphic"
        scale="10" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
  <filter id="noise-liter">
    <feTurbulence type="turbulence" baseFrequency="0.01 0.4"
        numOctaves="2" result="NOISE"/>
    <feDisplacementMap in2="NOISE" in="SourceGraphic"
        scale="5" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
  <clipPath id="jagged-clip" clipPathUnits="objectBoundingBox" style="filter: url(#noise-filter);">
    <!-- <rect x="0" y="0" width="100%" height="100%" style="filter: url(#noise-filter);" /> -->
    <path d="M0.5,1
    C 0.5,1,0,0.7,0,0.3
    A 0.25,0.25,1,1,1,0.5,0.3
    A 0.25,0.25,1,1,1,1,0.3
    C 1,0.7,0.5,1,0.5,1 Z" />
  </clipPath>
</svg>
