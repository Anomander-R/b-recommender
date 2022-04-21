import React from 'react'

const RecommendComponent = () => {
  return (
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">
          {`More Details about ${title}`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <b>Description:</b> {description}
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            <b>Publisher:</b> {publisher}
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            <b>Rating:</b> {averageRating}
          </DialogContentText>
          <Stack spacing={1}>
            <Rating
              name="half-rating"
              defaultValue={averageRatingNumber}
              precision={0.1}
              readOnly
            />
          </Stack>
          <DialogContentText id="alert-dialog-description">
            <b>Pages:</b> {pageCount}
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            <b>Rank:</b> {ratingsCount}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
  )
}

export default RecommendComponent


