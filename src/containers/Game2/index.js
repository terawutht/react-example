import React from 'react'


const Game2 = () => {

    const _renderItem = () => {
        return (
            <tr>
                <td>4 ดาว</td>
                <td>man u</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tr>
        )
    }

    return (
        <div>
            <h5 className={'mt-4'}>Match</h5>
            <div>Man u [] vs [] Liverpool</div>
            <h5>Table</h5>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">แข่ง</th>
                        <th scope="col">ชนะ</th>
                        <th scope="col">เสมอ</th>
                        <th scope="col">แพ้</th>
                        <th scope="col">คะแนน</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>4 ดาว</td>
                        <td>man u</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>5 ดาว</td>
                        <td>liverpool</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>

            <button className={'btn btn-sm btn-primary'}>Start</button>
        </div>


    )


}

export default Game2