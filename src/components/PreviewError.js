import React from 'react';

function PreviewError() {
    return (
        <div className='preview-error mb-3 w-100'>
            <div className='alert alert-danger text-center fw-bold w-100 shadow'>Something went wrong</div>
            <img src='img/qr-code.png' alt='qrcode' className='img-fluid' />
        </div>
    );
}

export default PreviewError;
