import Head from 'next/head';

const withHead = (Component, title, description) => {
	return (props) => {
		return (
			<>
				<Head>
					<title>{title}</title>
					<meta name="description" content={description} />
				</Head>
				<Component {...props}/>
			</>
		);
	};

};

export default withHead;