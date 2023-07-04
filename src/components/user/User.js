const User = (props) => {
    let {item}=props
    return (
        <div>
           <h2> {item.id} -- {item.name} </h2>
           <p> {item.status} - {item.species} <br/> {item.gender}</p>
            <img src={item.image} alt={'picture'}/>
        </div>
    );
};

export default User;