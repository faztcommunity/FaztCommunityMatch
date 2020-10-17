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
        <IconPrevius />
        <IconDontLike />
        <IconGiveStar />
        <IconGiveHeart />
        <IconBtnMatch />
        <IconNext />
        </div>
        <div className="background-btns-match"></div>
    </div>
  )
}

export default ContentsBtnsMatch
