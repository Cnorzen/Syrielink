import React from 'react';
import './index.css';
import OneTeamMember from '../Items/OneTeamMember';

const TeamMember = (props) => {
    return (
        <div className='team_members container'>
            <div className='team_members__text text-center mx-auto'>
                <h4 className="mt-4 text-uppercase text-success">Team Chúng Tôi</h4>
                <h2>Gặp gỡ thành viên của SynerLink</h2>
                <p className='mt-4'>Chúng tôi là SynerLink - một nền tảng kết nối và hỗ trợ cộng đồng với sứ mệnh tạo ra những thay đổi tích cực trong xã hội. Chúng tôi tin rằng mỗi ước mơ đều đáng quý và mọi người đều có khả năng góp phần vào việc thực hiện chúng</p>
            </div>
            <div className="row">
                {props.team.map((teamMember, index) =>
                    <OneTeamMember key={index} teamMember={teamMember} />
                )}
            </div>
        </div>
    );
}

export default TeamMember;
