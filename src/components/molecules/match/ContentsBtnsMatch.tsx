import React from 'react'
import IconBtnMatch from '../../atoms/match/IconBtnMatch'
import IconDontLike from '../../atoms/match/IconDontLike'
import IconGiveHeart from '../../atoms/match/IconGiveHeart'
import IconGiveStar from '../../atoms/match/IconGiveStar'
import IconNext from '../../atoms/match/IconNext'
import IconPrevius from '../../atoms/match/IconPrevius'

function ContentsBtnsMatch() {
  return (
    <div className="content-card-match">
        <div className="content-btns-match">

        <div className="content-btn-hover-previus">
        <IconPrevius />
        <span className="hover-btns-match"></span>
        </div>

        <div className="content-btn-hover-dont-like">
          <IconDontLike />
          <span className="hover-btns-match"></span>
        </div>

        <div className="content-btn-hover-star">
          <IconGiveStar />
          <span className="hover-btns-match"></span>
        </div>

        <div className="content-btn-hover-heart">
          <IconGiveHeart />
          <span className="hover-btns-match"></span>
        </div>

        <div className="content-btn-hover-match">
          <IconBtnMatch />
          <span className="hover-btns-match"></span>
        </div>

        <div className="content-btn-hover-next">
          <IconNext />
          <span className="hover-btns-match"></span>
        </div>

        </div>
        <div className="background-btns-match"></div>
    </div>
  )
}

export default ContentsBtnsMatch
