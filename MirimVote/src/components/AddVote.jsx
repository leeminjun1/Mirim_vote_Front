import styled from '@emotion/styled'


const AddVoteButton = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 20px;
    background: #F9F9F9;
    box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25);
    position: relative;
    margin: 10px;
`

const VoteButtonImg = styled.div`
    width: 100px;
    height: 10px;
    background-color: #288157;
    border-radius: 10px;
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const VoteButtonImg2 = styled.div`
    width: 10px;
    height: 100px;
    background-color: #288157;
    border-radius: 10px;
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export default function AddVote() {


    return (
        <>
            
            <AddVoteButton>
                <VoteButtonImg />
                <VoteButtonImg2 />
            </AddVoteButton>
            
        </>
    )
}