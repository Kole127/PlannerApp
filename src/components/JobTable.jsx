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
    <>
    <div className="relative overflow-x-auto shadow-md rounded-lg mt-16 mb-5">
      <table className="w-full text-sm text-left rtl:text-right text-stone-200 dark:text-stone-300">
          <thead className="text-xs text-stone-200 uppercase bg-stone-50 dark:bg-stone-900 dark:text-stone-200">
              <tr>
                  <th scope="col" className="px-6 py-3 text-center">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Link
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Position
                  </th>
                  <th scope="col" className="px-6 py-3 text-right">
                    Action
                  </th>
              </tr>
          </thead>
          <tbody>
          {jobs.map((job, i) => {
              return (
                <tr key={i} className={`bg-white border-b dark:bg-stone-700 dark:border-stone-300 hover:bg-gray-50 dark:hover:bg-stone-600 ${job.status == true ? 'done' : ''} `} >
                    <td scope="row" className="px-6 py-4 text-center">
                      <input type="checkbox" defaultChecked={job.status ? true : false} onChange={() => handleChange(job)} />
                    </td>
                    <td className="px-6 py-4 font-medium dark:text-stone-100">
                      {job.name}
                    </td>
                    <td className="px-6 py-4">
                      <a href={job.link}>see more</a>
                    </td>
                    <td className="px-6 py-4">
                        {job.position}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="font-medium text-grey-800 dark:text-grey-800 hover:underline" onClick={() => handleRemove(i)}>Remove</button>
                    </td>
                </tr>
              );
              })}
          </tbody>
      </table>
    </div>
    </>
    )
}