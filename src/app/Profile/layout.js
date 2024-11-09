import AsideProfile from '@/Components/AsideProfile/AsideProfile'
import React from 'react'

const layout = ({children}) => {
  return <>
       <div className="flex flex-col md:flex-row items-start  ">
        <AsideProfile />
<section className="w-full p-4      ">
  {children}
</section>

</div>
  </>
}

export default layout