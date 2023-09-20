interface InfoProps {
  name: string;
  email: string;
  phone: string;
}

function Info(props: InfoProps) {
  return(
     <div style={{padding: '1em 4em'}}>
        <h1 style={{fontWeight: '700'}}>Personal Info</h1>
        <p>Please provide your name, email address, and phone number.</p>

        <div style={{display: 'flex', flexDirection:'column'}}>
        <span style={{padding: '0.8em 0'}}>{props.name}</span>
        <input placeholder='e.g. Stephen King'></input>
        <span style={{padding: '0.8em 0'}}>{props.email}</span>
        <input placeholder='e.g. stephenking@lorem.com'></input>
        <span style={{padding: '0.8em 0'}}>{props.phone}</span>
        <input placeholder='e.g. +1 234 567 890'></input>
        <button style={{backgroundColor:'#1F61DD', color: '#FFFFFF', padding: '0.8em', fontWeight: '700'}}>Next Step </button>
        </div>
     </div>
  );
}

export default Info; 
