import React from 'react'
import { v4 as uuid } from 'uuid';

function UsersList(props) {
    // console.log('Stud: ', props.isStudent);
	// console.log('Teac: ', props.isTeacher);
    const list = 
	

	
		props.users
		.filter(user => {
			return (

				// `${user.firstName}${user.lastName}`.toLowerCase().includes(props.queryProp.toLowerCase())
				// --- Both solutions work for the Search Form 👆🏼 👇🏼 ---
				(
					user.firstName.toLowerCase().includes(props.queryProp.toLowerCase())
					||
					user.lastName.toLowerCase().includes(props.queryProp.toLowerCase())
				)
				&& (props.isStudent ? true : user.role !== 'student')
				&& (props.isTeacher ? true : user.role !== 'teacher')
				&& (props.campus === 'All' ? true : user.campus === props.campus)
			)

		})
		.map(user => {
			return (
				<tr key={uuid()}>
					<td>{user.firstName}</td>
					<td>{user.lastName}</td>
					<td>{user.campus}</td>
					<td>{user.role}</td>
					<td>{user.linkedin && <a href={user.linkedin}>🔗</a>}</td>
				</tr>
			)
		})

    
    return (
        <>
			{list}
        </>
    )
}
    
export default UsersList
    




// function UsersList(props) {
//     //console.log(props.queryProp);
//     const list = props.users
// 		.filter(user => {
// 			return (
// 				user.firstName.toLowerCase().includes(props.queryProp.toLowerCase())
// 				||
// 				user.lastName.toLowerCase().includes(props.queryProp.toLowerCase())
// 			)

// 		})
// 		.map(user => {
// 			return (
// 				<tr key={uuid()}>
// 					<td>{user.firstName}</td>
// 					<td>{user.lastName}</td>
// 					<td>{user.campus}</td>
// 					<td>{user.role}</td>
// 					<td>{user.linkedin && <a href={user.linkedin}>🔗</a>}</td>
// 				</tr>
// 			)
// 		})

    
//     return (
//         <>
// 			{list}
//         </>
//     )
// }