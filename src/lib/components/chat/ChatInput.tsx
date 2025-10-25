export const ChatInput = () => {
    return (
        <>
            <div className="rounded-div responsive-block">
                <div id="editableArea" contentEditable="true" role="textbox" aria-multiline="true">
                    Start typing here...
                </div>
                <textarea id="hiddenTextarea" name="postContent" style={{display: 'none'}}></textarea>
            </div>
        </>
    );
};