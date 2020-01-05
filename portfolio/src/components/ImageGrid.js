import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Tits from '../images/profile.png';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));



const tileData = [
    {
      img: Tits,
      title: 'Image',
      author: 'author',
      cols: 1,
    },
    {
      img: Tits,
      title: 'Image',
      author: 'author',
      cols: 1,
    },
  {
    img: Tits,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: Tits,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
];

export default function ImageGridList() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          {tileData.map(tile => (
              <GridListTile key={tile.img} cols={tile.cols || 1}>
                <img src={tile.img} alt={tile.title} />
              </GridListTile>
          ))}
        </GridList>
      </div>
  );
}
