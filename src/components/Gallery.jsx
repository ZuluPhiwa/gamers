import React from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import a from '../assets/hut/a.jpg'
import b from '../assets/hut/b.jpg'
import c from '../assets/hut/c.jpg'
import d from '../assets/hut/d.jpg'
import e from '../assets/hut/e.jpg'
import f from '../assets/hut/f.jpg'
import g from '../assets/hut/g.jpg'
import h from '../assets/hut/h.jpg'
import i from '../assets/hut/i.jpg'
import j from '../assets/hut/j.jpg'
import k from '../assets/hut/k.jpg'
import l from '../assets/hut/l.jpg'
import m from '../assets/hut/m.jpg'
import n from '../assets/hut/n.jpg'
import o from '../assets/hut/o.jpg'
import p from '../assets/hut/p.jpg'
import q from '../assets/hut/q.jpg'
import r from '../assets/hut/r.jpg'
import s from '../assets/hut/s.jpg'
import t from '../assets/hut/t.jpg'
import u from '../assets/hut/u.jpg'
import v from '../assets/hut/v.jpg'
import w from '../assets/hut/w.jpg'
import x from '../assets/hut/x.jpg'
import y from '../assets/hut/y.jpg'
import z from '../assets/hut/z.jpg'
import first from '../assets/hut/1.jpg'
const Gallery = () => {
  return (
    <div>
         <h1 className=' text-center mx-auto  font-extrabold  justify-center  text-5xl py-3 px-4 '>
            Gallery.
        </h1>
        <div className=' px-9 py-5'>
           
           <ResponsiveMasonry
       columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
   >
       <Masonry gutter='10px'>
  <img src={a} className='rounded-md  object-center block  w-full object-contain' alt="first" />
  <img src={q} className='rounded-md  object-center block w-full object-contain' alt="first" />
  <img src={w} className='rounded-md  object-center block w-full object-contain' alt="first" />
  <img src={e} className='rounded-md  object-center block w-full object-contain' alt="first" />
  <img src={r} className='rounded-md  object-center block w-full object-contain' alt="first" />
  <img src={t} className='rounded-md  object-center block w-full object-contain' alt="first" />
  <img src={y} className='rounded-md   w-full object-contain ' alt="first" />
  <img src={u} className='rounded-md   w-full object-contain ' alt="first" />
  <img src={i} className='rounded-md   w-full object-contain ' alt="first" />
  <img src={o} className='rounded-md   w-full object-contain ' alt="first" />
  <img src={p} className='rounded-md   w-full object-contain ' alt="first" />
  <img src={s} className='rounded-md   w-full object-contain ' alt="first" />
  <img src={d} className='rounded-sm   w-full object-contain ' alt="first" />
  <img src={f} className='rounded-md  object-center block w-full object-contain' alt="first" />
  <img src={g} className='rounded-md  object-center block w-full object-contain' alt="first" />
  <img src={h} className='rounded-md  object-center block w-full object-contain' alt="first" />
  <img src={j} className='rounded-md  object-center block w-full object-contain' alt="first" />
  <img src={k} className='rounded-md  object-center block w-full object-contain' alt="first" />
  <img src={l} className='rounded-md  object-center block w-full object-contain' alt="first" />
  {/* <img src={t} className='rounded-md  object-center block w-full object-contain' alt="first" />
  <img src={z} className='rounded-md  object-center block w-full object-contain' alt="first" />
  <img src={b} className='rounded-md  object-center block w-full object-contain' alt="first" />
  <img src={c} className='rounded-md  object-center block w-full object-contain' alt="first" />
  <img src={m} className='rounded-md  object-center block w-full object-contain' alt="first" />
  <img src={n} className='rounded-md  object-center block w-full object-contain' alt="first" />
  <img src={x} className='rounded-md  object-center block w-full object-contain' alt="first" />
  <img src={v} className='rounded-md  object-center block w-full object-contain' alt="first" />
  <img src={first} className='rounded-md  object-center block w-full object-contain' alt="first" /> */}
       </Masonry>
   </ResponsiveMasonry>
</div>
    </div>
  )
}

export default Gallery