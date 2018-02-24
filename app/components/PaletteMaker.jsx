import React from 'react'

export default function PaletteMaker (_num) {
  const color = clrBtns[_num]
  return clrPalettes[color]
}

const clrBtns = ['gray', 'blue', 'indigo', 'violet', 'fuschia', 'pink', 'red', 'orange', 'yellow', 'lime', 'green', 'teal', 'cyan' ]

const clrPalettes = {

gray: [
'#dee1e3',
'#cfd3d6',
'#bec4c8',
'#acb4b9',
'#97a1a7',
'#7f8a93',
'#5f6e78',
'#374047'
],
blue: [
'#a5cfed',
'#7db9e5',
'#4a9eda',
'#0077cc',
'#006bb7',
'#005da0',
'#004d84',
'#00365d'
],
indigo: [
'#b7bbf0',
'#959ce9',
'#6872e0',
'#0011cc',
'#000fb7',
'#000da0',
'#000a83',
'#00075c'
],
violet: [
'#ceb6f0',
'#b894e9',
'#9966e0',
'#5500cc',
'#4c00b8',
'#4300a1',
'#370084',
'#27005e'
],
fuschia: [
'#ebb5f0',
'#e293e9',
'#d665e0',
'#bb00cc',
'#a900b8',
'#9400a2',
'#7b0086',
'#580061'
],
pink: [
'#f0b6d8',
'#e994c6',
'#e066ad',
'#cc0077',
'#b8006b',
'#a2005e',
'#86004e',
'#610038'
],
red: [
'#f0b7bc',
'#ea969d',
'#e16973',
'#cc0011',
'#b8000f',
'#a2000d',
'#86000b',
'#610008'
],
orange: [
'#ecc2a4',
'#e4a87c',
'#da864a',
'#cc5500',
'#b84c00',
'#a04300',
'#843700',
'#5e2700'
],
yellow: [
'#e9e293',
'#e0d668',
'#d7c938',
'#ccbb00',
'#b8a900',
'#a29400',
'#867b00',
'#615800'
],
lime: [
'#c7ea97',
'#b1e16c',
'#96d73b',
'#77cc00',
'#6bb800',
'#5ea200',
'#4e8600',
'#386100'
],
green: [
'#a9eca3',
'#84e47b',
'#54da48',
'#11cc00',
'#0fb800',
'#0da200',
'#0b8600',
'#086100'
],
teal: [
'#a2ecc1',
'#79e4a6',
'#46da84',
'#00cc55',
'#00b84c',
'#00a243',
'#008638',
'#006128'
],
cyan: [
'#a0ece5',
'#77e3da',
'#44d9cd',
'#00ccbb',
'#00b8a9',
'#00a294',
'#00867b',
'#006159'
]
}
