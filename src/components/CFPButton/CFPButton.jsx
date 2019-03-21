import React from 'react';
import { CFP } from 'data/constants';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { CTALeafLike } from 'lib';

export const CFPButton = ({ className = '' }) => (
  <CTALeafLike
    href={CFP.url}
    title={CFP.title}
    as={OutboundLink}
    color="secondary"
    target="_blank"
    className={className}
  >
    ¿Querés dar
    <br />
    una charla?
  </CTALeafLike>
);
