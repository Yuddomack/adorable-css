export const TURORIAL_3_BOX_MODEL = `
<!--
Box Model
- width / height
: w(32) h(32)

w(32) { width: 32px }
w(~32) { max-width: 32px }
w(32~) { min-width: 32px }
w(32~63) { min-width: 32px; max-width: 32px }
w(1/5) { width:20% }
w(100%-20px) { width: calc(100% - 20px) }

- margin / padding / border / border-radius + (top / right / bottom / left)
: m/p/b/r + t/r/b/l 이런식의 조합방식을 사용합니다.
: box-model는 빈도를 고려해 축약해서 사용합니다.

ex)
m(10) { margin: 10px }
p(10/20) { padding: 10px 20px; }
br(#ccc) { border-right: 1px solid #ccc }
bbw(2) { border-bottom-width: 2px }
r(10) { border-radius: 10px }
r(10/10/20/20) { border-radius: 10px 10px 20px 20px }
r(100%) { border-radius: 100% }
rtl(5) { border-top-left-radius: 100% }
rr(10) { border-top-right-radius: 10px; border-bottom-right-radius: 10px;  

Box sizing
border-box { box-sizing: border-box }
content-box { box-sizing: content-box }
-->


<h1>Box Model</h1>

<div class="w(64) h(64) bg(orange) p(10) m(10)">64 x 64</div>

<div class="w(~128) h(128~) b(orange) bg(#fff) p(24) m(20)">max-width<br/>min-height</div>

<div class="w(128) h(128) r(20) bg(red) p(20)">128 x 128 r(20)</div>

<div class="bl(4/red) bg(#f00.2) p(20) m(10)">quoto</div>

<div class="bg(blue) c(#fff) rl(20) p(20)">border-radius left</div>

<div class="bg(#fff) w(100) h(100) bt(red) br(8/orange) bb(dashed) bl(dotted/blue) m(20)">bt br bb bl</div>

`.trim()