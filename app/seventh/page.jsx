import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <div>
      Thank you for your responce!
      
  <Link href="/tickets">
<button class="btn-53">
  <div class="original">click here to go home page!</div>
  <div class="letters">
    
    <span>c</span>
    <span>l</span>
    <span>i</span>
    <span>c</span>
    <span>k</span>
    
  </div>
  
</button>
</Link> 
<br /><br />

<div class="tooltip-container">
  <div class="tooltip">
    <div class="text">Save Trees</div>

    <div class="leaf leaf1"></div>
    <div class="leaf leaf2"></div>
    <div class="leaf leaf3"></div>
    <div class="leaf leaf4"></div>
  </div>
  <div class="leaf icon"></div>
</div>
 
</div>  
    
  )
}
