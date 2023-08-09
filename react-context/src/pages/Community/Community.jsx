import React, {useContext} from 'react';
import { FetchContext } from '../../context/FetchContext';

import Header from '../../components/Header/Header';
import Sidebar  from '../../components/Sidebar/SideBar';
import ComingSoon from '../../components/ComingSoon/ComingSoon'


const Community = () => {
	const {userData} = useContext(FetchContext);

	return (
		<div>
			<Header />
			<main>
			    <Sidebar />
				<div>
				    <ComingSoon />
				</div>
			</main>
		</div>
	);
};

export default Community;
