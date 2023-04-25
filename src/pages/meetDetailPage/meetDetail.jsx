import React, { useEffect, useState } from 'react'
import { ListGroup, Stack,Badge } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Calendar from '../../components/calendar/calendar';
import styles from "./meetDetail.module.css";

//1. 캘린더 및에 시간처리 어떻게 할 것인가?

function MeetDetail() {
  const [meetName, setMeetName]=useState('모임명');
  const [visible, setVisible]=useState(false);
  const [hashArr, setHashArr]=useState(["게임", "술"]);
  const [joinArr, setJoinArr]=useState(["김민지", "김주호", "박종빈", "이하은"]);
  const [maxJoin, setMaxJoin]=useState(6);
  const getData=async ()=>{
    //axios call;
  }
  useEffect(()=>{
    getData();
  },[])
  return (
    <Stack className={`${styles.main}`} gap={3}>
      <Stack className={`${styles.header}`} direction="horizontal" gap={2}>
        <Stack direction="horizontal" gap={2}>
          <span className={`${styles.meetName}`}>{meetName}</span>
          <span className={`${styles.visible}`}>{visible ? "공개":"비공개"}</span>
        </Stack>
        <Button as="input" type="button" value="참여하기" style={{backgroundColor:"var(--main_color)" ,border:"1px solid var(--main_color)"}}></Button>
      </Stack>
      <Stack direction='horizontal' gap={2}>
        {
          hashArr.map((hash)=>{
            return <span className={`${styles.hashTag}`}>{'#'+hash+' '}</span>
          })
        }
      </Stack>
      <hr/>
      <Stack className={`${styles.body}`}>
        <Stack className={`${styles.join}`}>
          <div className={`${styles.joinTitle}`}>참가자 리스트 ({joinArr.length}/{maxJoin})</div>
          <ListGroup className={`${styles.joinList}`}>
            {
              joinArr.map((person)=>{
                let isMaster=true;
                return (
                  <ListGroup.Item variant='light' className={`${styles.joinElement} d-flex justify-content-between`}>
                    <div>{person}</div>
                    {isMaster && (<Badge pill bg="light" className={`${styles.masterBadge}`}>⭐</Badge>) }
                  </ListGroup.Item>
                )})
            }
          </ListGroup>
        </Stack>
        <Stack>
          <div className={`${styles.meetTitle}`}>
            <span>모임 날짜 및 시간</span>

          </div>
          <div className={`${styles.meetCalendar}`}>
            <Calendar/>
          </div>
        </Stack>
      </Stack>
      <hr/>
    </Stack>
  )
}

export default MeetDetail;