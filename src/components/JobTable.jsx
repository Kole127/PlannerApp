export default function JobTable ({jobs, setJobs}) {
    const handleRemove = (index) => {
        console.log(index)
        const updatedJobs = jobs.filter((_, i) => i !== index);

        setJobs(updatedJobs);
    }

    const handleChange = (clickedJob) => {
        const updatedJobs = jobs.map(job => job === clickedJob ? {...job, status: !clickedJob.status} : job)
        setJobs(updatedJobs);
    }

    return(
        <table border={1}>
        <thead>
            <tr>
                <th>Status</th>
                <th>Name</th>
                <th>Link</th>
                <th>Position</th>
                <th>Remove</th>
            </tr>
        </thead>
        <tbody>
          {jobs.map((job, i) => {
            return (
              <tr key={i} className={job.status == true ? 'done' : ''}>
                <td><input type="checkbox" defaultChecked={job.status ? true : false} onChange={() => handleChange(job)} /></td>
                <td>{job.name}</td>
                <td><a href={job.link}>see more</a></td>
                <td>{job.position}</td>
                <td><button onClick={() => handleRemove(i)}>x</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    )
}