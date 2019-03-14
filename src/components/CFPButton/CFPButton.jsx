import React from 'react';
import { CFP } from 'data/constants';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { CTALeafLike } from 'lib';

export const CFPButton = () => (
  <CTALeafLike href={CFP.url} title={CFP.title} as={OutboundLink} target="_blank">
    {CFP.title}
  </CTALeafLike>
);
