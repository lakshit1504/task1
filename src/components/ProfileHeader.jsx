import React from 'react'
import {BsFillPencilFill} from "react-icons/bs"
import {AiOutlineUser,AiOutlineStar} from "react-icons/ai"

const ProfileHeader = () => {
  return (
    <div className='profileHeader'>
        <div className='details'>
            <div className='dp'>
                <AiOutlineUser style={{"backgroundColor":'white', "fontSize":"5rem","padding":"2rem","borderRadius":"100%"}}/>
                <br />
                <div>
                   <span style={{"fontSize":"1.4rem","fontWeight":"700"}}>4.5<AiOutlineStar/> </span> <br />
                    Ratings
                </div>
            </div>
            <div className="identity">
                <div>
                <span style={{"fontSize":"1.8rem","fontWeight":"700"}}>John Doe</span> , <span style={{"fontSize":"1.4rem","fontWeight":"400"}}>5 Yrs Exp.</span>
                <br />
            </div>
            <div>
                <span style={{"color":"purple","fontWeight":"600"}}>Details</span> <br />
                I am interested in Science and Web technology, <br />
                basic Lorem ipsum

                <div className="subjects">
                    <div>Science</div>
                    <div>Maths</div>
                    <div>Hindi</div>
                </div>

                </div>

            </div>
        </div>
        <div className='rating'>
                <AiOutlineStar style={{"backgroundColor":"pink","borderRadius":"100%"}}/>
                <AiOutlineStar style={{"backgroundColor":"yellow","borderRadius":"100%"}}/>
                <AiOutlineStar style={{"backgroundColor":"#ada6a6","borderRadius":"100%"}}/>
                <AiOutlineStar style={{"backgroundColor":"#77e077","borderRadius":"100%"}}/>
        </div>
        <div className='btn'>
            <a href="/profile"><BsFillPencilFill/> Profile</a>
        </div>
    </div>
  )
}

export default ProfileHeader