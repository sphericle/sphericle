import "../css/VideoProgress.css"
import { useEffect, useState } from 'react';

interface Statuses {
    "Trimming": string,
    "Editing": string,
    "Final touches": string,
    "Uploading": string
}

interface VideoData {
    statuses: Statuses,
    status: number,
    progress: number,
    cliptime: number,
    trimmedTime: number,
    editedTime: number,
    runtime: string,
    note?: string,
    latestVideo?: string,
}

function VideoProgress() {
    const [data, setData] = useState<VideoData | undefined>();

    useEffect(() => {
        fetch("/data/video_progress.json")
            .then(data => data.json())
            .then(data => data as VideoData)
            .then(data => setData(data))
    })

    if (!data) return;

    return (
        <>
            {(data.status == -1 && 
            <>
                <img src="/imgs/sleeping.jpeg" className="img-curved" />
                <h1>No progress yet!</h1>
            </>) ||
            <>
                {data.status == 4 &&
                <>
                    <h1>The video is out!</h1>
                    <iframe
                        title="Latest Video"
                        src='http://www.youtube.com/embed/videoseries?list=UUP9rAStP33um-j-Zov89nyQ&feature=player_embedded&index=0&loop=1&origin=http://sphericle.pages.dev/videoprogress&fs=1&widget_referrer=http://sphericle.pages.dev/videoprogress'
                        width="600"
                        height="340"
                    />
                </> || 
                <>
                    {data.status == 0 && <h1>Trimmed { Math.floor(data.trimmedTime / 60) }h, {data.trimmedTime % 60 }min of raw footage so far ({ Math.round(data.trimmedTime / data.cliptime * 100) }%)</h1> ||
                    data.status == 1 && <h1>Edited { data.editedTime % 60 }min so far</h1> ||
                    data.status > 1 && <h1>Editing is done!</h1>}
                    {data.status > 0 && <h2 style={{"font-size": "2.5rem"}}>Runtime: {data.runtime}</h2>}
                    <br />
                    {data.note && <h2 className="video-note">Note: {data.note}</h2>}
                </>}
                
                <table className="video-table">
                    <thead>
                        <tr>
                            <th>Step</th>
                            <th>Progress</th>
                        </tr>
                    </thead>
                    <tbody className="table-data">
                        
                        {Object.keys(data.statuses).map((subStatus, i) => {
                            let thisSubStatus = data.statuses[subStatus as keyof typeof data.statuses];
                            return (
                                <tr key={subStatus}>
                                    <td>{subStatus}</td>
                                    <td>
                                        {i < data.status && <img className="status-icon" src="/imgs/check.png" />}
                                        {(i < data.status && thisSubStatus && <span>&nbsp;&nbsp;{thisSubStatus}</span>
                                        ) || (data.status > 1 && i == data.status && <img src="/imgs/sleeping.jpeg" className="rotating img-curved" />
                                        ) || (i == data.status && 
                                            <div className="progress-bar">
                                                <div
                                                    style={{ backgroundColor: "rgb(0, 170, 220)", height: "24px", width: (data.progress && data.progress > 0 ? data.progress : 1) + '%' }}
                                                />
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <br /><br /><br />
                {data.status !== 4 && data.latestVideo && 
                <>
                    <h1>Latest video:</h1>
                    <iframe
                        title="Latest Video"
                        src={data.latestVideo}
                        width="600"
                        height="340"
                    />
                </>}
            </>}
        </>
    )
}
export default VideoProgress;
