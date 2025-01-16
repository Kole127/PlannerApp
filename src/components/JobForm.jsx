import { useEffect, useState } from "react";

export default function JobForm ({jobs, setJobs}) {
    const [status, setStatus] = useState(false);
    const [company, setCompany] = useState("");
    const [link, setLink] = useState("");
    const [position, setPosition] = useState("");

    const handleChange = (e) => {
        const setters = {
            status: setStatus,
            company: setCompany,
            link: setLink,
            position: setPosition
        };

        if(e.target.name == 'status'){
            setters[e.target.name]?.(e.target.checked);
        } else {
            setters[e.target.name]?.(e.target.value); 
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setJobs([...jobs, {status: status, name: company, link: link, position: position}]);

        setStatus(false);
        setCompany('');
        setLink('');
        setPosition('');
    }

    return (
    <form onSubmit={handleSubmit} >
        <label>Status</label>{" "}
        <input checked={status} type="checkbox" name="status" id="status" onChange={handleChange} />{" "}
        <label htmlFor='company'>Company</label>{" "}
        <input value={company} type="text" name="company" id="company" onChange={handleChange} />{" "}
        <label htmlFor="link">Link</label>{" "}
        <input value={link} type="text" name="link" id={link} onChange={handleChange} />{" "}
        <label htmlFor="position">Position</label>{" "}
        <input value={position} type="text" name="position" id={position} onChange={handleChange} />
        <button type="submit">Submit</button>
    </form>
    )
}